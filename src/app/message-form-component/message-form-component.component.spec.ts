import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageFormComponentComponent } from './message-form-component.component';

describe('MessageFormComponentComponent', () => {
  let component: MessageFormComponentComponent;
  let fixture: ComponentFixture<MessageFormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageFormComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
