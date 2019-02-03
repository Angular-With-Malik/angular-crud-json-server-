import { SharedModule } from "./shared.module";

describe('ServiceModule', () => {
  let serviceModule: SharedModule;

  beforeEach(() => {
    serviceModule = new SharedModule();
  });

  it('should create an instance', () => {
    expect(serviceModule).toBeTruthy();
  });
});
