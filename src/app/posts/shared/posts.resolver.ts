import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Post } from "./model";
import { PostsService } from "./posts.service";

export class PostsResolver implements Resolve<Post[]> {
    constructor(private service: PostsService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Post[] | Observable<Post[]> | Promise<Post[]> {
        return this.service.getPosts()
    }
}