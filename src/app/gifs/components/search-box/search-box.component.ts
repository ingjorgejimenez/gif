import { Component, ElementRef, ViewChild } from '@angular/core'
import { GifsService } from '../../services/services.service'

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  tagInput!: ElementRef<HTMLInputElement>

  constructor(private gifsService: GifsService) {}

  searchTag() {
    const newTag = this.tagInput.nativeElement.value
    if (newTag.trim().length === 0 || !isNaN(Number(newTag))) return

    // add Tag using the services
    this.gifsService.searchTag(newTag)
    this.tagInput.nativeElement.value = ''
  }
}
