import { ComponentFixture, TestBed } from '@angular/core/testing'; //test ortamı kurulur

import { Todos } from './todos'; //test edilen compoenentler içeri alınır 

describe('Todos', () => {
  let component: Todos;
  let fixture: ComponentFixture<Todos>;

  beforeEach(async () => { //testtten önce çalışır
    await TestBed.configureTestingModule({ //hazırlanma bitmeden aşağıya geçme komutu
      imports: [Todos]
    })
    .compileComponents(); //html+css

    fixture = TestBed.createComponent(Todos); //test.. todos comp. test ortamında gerçekten üretir
    component = fixture.componentInstance; //ts tarafındaki classı alır ex:component.todos, addtodo, deletetodo
    await fixture.whenStable(); //her şey hazır olunca test devam etsin
  });

  it('should create', () => { //düzgün gidiyor mu
    expect(component).toBeTruthy(); //sonuç
  });
});
