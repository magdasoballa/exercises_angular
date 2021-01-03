import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { PostsListComponent } from '../posts-list/posts-list.component';
import { PostsItemComponent } from '../posts-item/posts-item.component';
import { PostsRoutingModule } from './posts-routing.module';



@NgModule({
  declarations: [
    PostsComponent,
    PostsListComponent,
    PostsItemComponent,
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
