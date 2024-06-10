import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Gif, ISearchResponse } from '../interfaces/gifs'
import { environment } from '../../../environments/environment'

@Injectable({ providedIn: 'root' })
export class GifsService {
  gifList: Gif[] = []

  private _tagsHistory: string[] = []
  private serviceUrl: string = environment.baseUrl
  private apiKey: string = environment.apiKey

  constructor(private http: HttpClient) {
    this.getLocalStorage()
    console.log('Gifs service Ready Fist moated')
  }

  get tagsHistory() {
    return [...this._tagsHistory]
  }

  private organizeHistory(tag: string) {
    const tagLower = tag.toLowerCase()
    if (this._tagsHistory.includes(tagLower)) {
      this._tagsHistory = this._tagsHistory.filter(t => t !== tagLower)
    }
    if (this._tagsHistory.length > 9) return
    this._tagsHistory.unshift(tagLower)
    this.saveLocalStorage()
  }
  private saveLocalStorage() {
    localStorage.setItem('tagsHistory', JSON.stringify(this._tagsHistory))
  }

  private getLocalStorage() {
    const tags = localStorage.getItem('tagsHistory')
    if (!tags) return
    this._tagsHistory = JSON.parse(tags)
    if (this?._tagsHistory?.length > 0) this.searchTag(this._tagsHistory[0])
  }

  searchTag(tag: string, limit: string = '10'): void {
    this.organizeHistory(tag)
    // fetch(
    //   `https://api.giphy.com/v1/gifs/search?api_key=59tWrVq623JH7uwa5PL2sKsFzMUriwRy&q=${tag}`,
    // )
    //   .then(response => response.json())
    //   .then(result => console.log(result))
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', tag)
      .set('limit', limit)
    this.http
      .get<ISearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe(response => {
        this.gifList = response.data
      })
    console.log(params)
  }
}
