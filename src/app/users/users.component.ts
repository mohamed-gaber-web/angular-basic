import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  constructor(private route: ActivatedRoute) {
    // 1- this.route.snapshot.params['id']
    // 2- this.route.snapshot.paramMap.get('id')
    this.sub = this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      // params['id']
    });

    this.sub = this.route.queryParamMap.subscribe(qParam => {
      console.log(qParam.get('age'));
    });
  }

  ngOnInit(): void {
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
