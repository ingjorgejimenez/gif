import { Component } from '@angular/core'
import { GifsService } from '../../../gifs/services/services.service'

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) {}

  get tagsHistory(): string[] {
    return this.gifsService.tagsHistory
  }
  searchTag(tag: string): void {
    this.gifsService.searchTag(tag, '8')
  }
}
