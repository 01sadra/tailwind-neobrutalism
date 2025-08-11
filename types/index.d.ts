/**
 * @feedfuse/tailwind-neobrutalism TypeScript definitions
 */

export interface NeobrutalisConfiguration {
  /**
   * Color configuration
   */
  colors?: {
    youtube?: {
      red?: string;
      dark?: string;
      white?: string;
      gray?: string;
      'light-gray'?: string;
      black?: string;
    };
    brutal?: {
      primary?: string;
      secondary?: string;
      accent?: string;
      warning?: string;
      error?: string;
      info?: string;
      success?: string;
    };
  };

  /**
   * Font configuration
   */
  fonts?: {
    sans?: string[];
    mono?: string[];
    farsi?: string[];
  };

  /**
   * Shadow configuration
   */
  shadows?: {
    x?: string;
    y?: string;
    xHover?: string;
    yHover?: string;
  };

  /**
   * Spacing configuration
   */
  spacing?: {
    xs?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    '2xl'?: string;
    '3xl'?: string;
  };

  /**
   * Border radius configuration
   */
  borderRadius?: {
    brutal?: string;
  };

  /**
   * Border width configuration
   */
  borderWidth?: {
    brutal?: string;
  };
}

declare const plugin: {
  (options?: NeobrutalisConfiguration): {
    handler: any;
    config?: Partial<any>;
  };
  withOptions: (options?: NeobrutalisConfiguration) => any;
};

export default plugin;