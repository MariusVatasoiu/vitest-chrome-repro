import "@webcomponents/scoped-custom-element-registry";

beforeEach(() => {
  vi.restoreAllMocks();

  vi.spyOn(window.history, "back").mockImplementation(() => {});
  vi.spyOn(window.history, "go").mockImplementation(() => {});
});
