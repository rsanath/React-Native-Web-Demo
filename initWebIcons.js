import EntypoFont from 'react-native-vector-icons/Fonts/Entypo.ttf';
import FeatherFont from 'react-native-vector-icons/Fonts/Feather.ttf';

function injectFont(fontName, font) {
  const iconFontStyles = `@font-face {
    src: url(${font});
    font-family: ${fontName};
  }`;
  const style = document.createElement('style');
  style.id = fontName;
  style.type = 'text/css';
  if (style.styleSheet) {
    style.styleSheet.cssText = iconFontStyles;
  } else {
    style.appendChild(document.createTextNode(iconFontStyles));
  }
  // Inject stylesheet
  document.head.appendChild(style);
}

export function initWebIcons() {
  const fonts = {
    Entypo: EntypoFont,
    Feather: FeatherFont,
  };
  Object.entries(fonts).forEach(([fontName, font]) => {
    injectFont(fontName, font);
  });
}
