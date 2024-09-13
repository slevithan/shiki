// Generated by script

export const replacements = [
  [
    '(?<square>[^\\[\\]\\\\]|\\\\.|\\[\\g<square>*+\\])',
    '(?<square>[^\\[\\]\\\\]|\\\\.|\\[(?:[^\\[\\]\\\\]|\\\\.|\\[(?:[^\\[\\]\\\\]|\\\\.|\\[(?:[^\\[\\]\\\\])*+\\])*+\\])*+\\])',
  ],
  [
    '(?<url>(?>[^\\s()]+)|\\(\\g<url>*\\))',
    '(?<url>(?>[^\\s()]+)|\\((?:(?>[^\\s()]+)|\\((?:(?>[^\\s()]+)|\\((?>[^\\s()]+)*\\))*\\))*\\))',
  ],
] as [string, string][]