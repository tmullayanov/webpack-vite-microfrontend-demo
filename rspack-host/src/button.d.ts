declare module 'guest/Button' {
  const Button: () => JSX.Element;

  export default Button;
}

declare module 'guest/export-app' {
  export const provider: () => {
    render(info: RenderParams): Promise<void>;
    destroy(info: DestroyParams): void;
}
}