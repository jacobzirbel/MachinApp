import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserItemsPage } from './user-items.page';

describe('UserItemsPage', () => {
  let component: UserItemsPage;
  let fixture: ComponentFixture<UserItemsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserItemsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserItemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
