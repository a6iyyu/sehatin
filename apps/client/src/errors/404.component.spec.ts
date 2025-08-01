import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Error404 } from "./404.component";

describe("Error404", () => {
  let component: Error404;
  let fixture: ComponentFixture<Error404>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Error404],
    }).compileComponents();

    fixture = TestBed.createComponent(Error404);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});