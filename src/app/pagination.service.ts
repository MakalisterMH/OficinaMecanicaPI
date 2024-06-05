import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  private itemsPerPage: number = 13;

  getPaginatedItems<T>(items: T[], currentPage: number): T[] {
    const startIndex = (currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return items.slice(startIndex, endIndex);
  }

  getTotalPages(totalItems: number): number {
    return Math.ceil(totalItems / this.itemsPerPage);
  }

  getPages(totalItems: number): number[] {
    const totalPages = this.getTotalPages(totalItems);
    return Array(totalPages).fill(0).map((x, i) => i + 1);
  }
}
