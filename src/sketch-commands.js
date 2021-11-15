import BrowserWindow from 'sketch-module-web-view';
import { getWebview } from 'sketch-module-web-view/remote';
import UI from 'sketch/ui';

var Page = require('sketch/dom').Page
var Document = require('sketch/dom').Document;

const webviewIdentifier = 'design-to-code.webview';
const webviewABoutIdentifier = 'design-to-code.webview_about';

//settings for webview window
const options = {
  identifier: webviewIdentifier,
  width: 450,
  height: 800,
  show: false,
  resizable: true,
  minimizable: true,
  maximizable: false,
  alwaysOnTop: true,
  titleBarStyle: "hiddenInset"
}

const browserWindow = new BrowserWindow(options);

//exportable functions
export default function () {

  
  const webContents = browserWindow.webContents; 

  // only show the window when the page has loaded to avoid a white flash
  browserWindow.once('ready-to-show', () => {
    browserWindow.show()
  })

  browserWindow.loadURL(require('../resources/webview.html')); //webview to load

  UI.message('Plugin is starting...'); //show a message in sketch giving feedback that plugin is starting

  //when webview finishes loading
  webContents.on('did-finish-load', () => {

    var thisDocument = require('sketch/dom').getSelectedDocument();

    if(thisDocument === "undefined" || thisDocument === undefined) {
      browserWindow.webContents
      .executeJavaScript('showDownloadUIKit()')
      .then((res) => {})
      .catch(function(error) {
        console.log('There has been a problem with your "did-finish-load" operation from plugin: ' + error.message);
          throw error;
        });
    } else {
      browserWindow.webContents
      .executeJavaScript('updateStylesOnInit('+generateArrayColors()+')')
      .then((res) => {})
      .catch(function(error) {
        console.log('There has been a problem with your "did-finish-load" operation from plugin: ' + error.message);
          throw error;
        });
    }

  })

  // add a handler for a call from web content's javascript
  webContents.on('updateAllStyles', s => {

    browserWindow.webContents
      .executeJavaScript('updateCSS('+generateArrayColors()+')')
      .then((res) => {})
      .catch(function(error) {
        console.log('There has been a problem with your "updateAllStyles" function from plugin: ' + error.message);
          throw error;
        });
  
  })

  webContents.on('externalLinkClicked', (url) => {
    NSWorkspace.sharedWorkspace().openURL(NSURL.URLWithString(url))
  })

}

//When Document Changed send alert to webview
export function onDocumentChanged(context) {

  browserWindow.webContents
  .executeJavaScript('documentChanged('+generateArrayColors()+')')
  .then((res) => {})
  .catch(function(error) {
    console.log('There has been a problem with your "onDocumentChanged" function from plugin: ' + error.message);
      throw error;
    });

}

// When the plugin is shutdown by Sketch (for example when the user disable the plugin)
// we need to close the webview if it's open
export function onShutdown() {
  const existingWebview = getWebview(webviewIdentifier)
  if (existingWebview) {
    existingWebview.close()
  }

}

//Get all values from Sketch and return in a string
function generateArrayColors(){
  var thisDocument = require('sketch/dom').getSelectedDocument();

    //try{var =}catch{=0;}

    //brand pallete
    try{var primary_color=trimHexadecimal(thisDocument.getLayersNamed("Color | Fill Colors/Brand/Primary/Base")[0].style.fills[0].color);}catch{primary_color=0;}
    try{var secondary_color=trimHexadecimal(thisDocument.getLayersNamed("Color | Fill Colors/Brand/Secondary/Base")[0].style.fills[0].color);}catch{secondary_color=0;}
    //semantic pallete
    try{var color_info=trimHexadecimal(thisDocument.getLayersNamed("Color | Fill Colors/Semantic/Info/Base")[0].style.fills[0].color);}catch{color_info=0;}
    try{var color_info_light=trimHexadecimal(thisDocument.getLayersNamed("Color | Fill Colors/Semantic/Info/Light")[0].style.fills[0].color);}catch{color_info_light=0;}
    try{var color_success=trimHexadecimal(thisDocument.getLayersNamed("Color | Fill Colors/Semantic/Success/Base")[0].style.fills[0].color);}catch{color_success=0;}
    try{var color_success_light=trimHexadecimal(thisDocument.getLayersNamed("Color | Fill Colors/Semantic/Success/Light")[0].style.fills[0].color);}catch{color_success_light=0;}
    try{var color_warning=trimHexadecimal(thisDocument.getLayersNamed("Color | Fill Colors/Semantic/Warning/Base")[0].style.fills[0].color);}catch{color_warning=0;}
    try{var color_warning_light=trimHexadecimal(thisDocument.getLayersNamed("Color | Fill Colors/Semantic/Warning/Light")[0].style.fills[0].color);}catch{color_warning_light=0;}
    try{var color_error=trimHexadecimal(thisDocument.getLayersNamed("Color | Fill Colors/Semantic/Error/Base")[0].style.fills[0].color);}catch{color_error=0;}
    try{var color_error_light=trimHexadecimal(thisDocument.getLayersNamed("Color | Fill Colors/Semantic/Error/Light")[0].style.fills[0].color);}catch{color_error_light=0;}
    //neutral pallete
    try{var color_neutral_0=trimHexadecimal(thisDocument.getLayersNamed("Color | Fill Colors/Neutral/Neutral 0")[0].style.fills[0].color);}catch{color_neutral_0=0;}
    try{var color_neutral_1=trimHexadecimal(thisDocument.getLayersNamed("Color | Fill Colors/Neutral/Neutral 1")[0].style.fills[0].color);}catch{color_neutral_1=0;}
    try{var color_neutral_2=trimHexadecimal(thisDocument.getLayersNamed("Color | Fill Colors/Neutral/Neutral 2")[0].style.fills[0].color);}catch{color_neutral_2=0;}
    try{var color_neutral_3=trimHexadecimal(thisDocument.getLayersNamed("Color | Fill Colors/Neutral/Neutral 3")[0].style.fills[0].color);}catch{color_neutral_3=0;}
    try{var color_neutral_4=trimHexadecimal(thisDocument.getLayersNamed("Color | Fill Colors/Neutral/Neutral 4")[0].style.fills[0].color);}catch{color_neutral_4=0;}
    try{var color_neutral_5=trimHexadecimal(thisDocument.getLayersNamed("Color | Fill Colors/Neutral/Neutral 5")[0].style.fills[0].color);}catch{color_neutral_5=0;}
    try{var color_neutral_6=trimHexadecimal(thisDocument.getLayersNamed("Color | Fill Colors/Neutral/Neutral 6")[0].style.fills[0].color);}catch{color_neutral_6=0;}
    try{var color_neutral_7=trimHexadecimal(thisDocument.getLayersNamed("Color | Fill Colors/Neutral/Neutral 7")[0].style.fills[0].color);}catch{color_neutral_7=0;}
    try{var color_neutral_8=trimHexadecimal(thisDocument.getLayersNamed("Color | Fill Colors/Neutral/Neutral 8")[0].style.fills[0].color);}catch{color_neutral_8=0;}
    try{var color_neutral_9=trimHexadecimal(thisDocument.getLayersNamed("Color | Fill Colors/Neutral/Neutral 9")[0].style.fills[0].color);}catch{color_neutral_9=0;}
    try{var color_neutral_10=trimHexadecimal(thisDocument.getLayersNamed("Color | Fill Colors/Neutral/Neutral 10")[0].style.fills[0].color);}catch{color_neutral_10=0;}
    //extended base pallete - red
    try{var color_red_darkest=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Red/Darkest")[0].style.fills[0].color);}catch{color_red_darkest=0;}
    try{var color_red_darker=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Red/Darker")[0].style.fills[0].color);}catch{color_red_darker=0;}
    try{var color_red_dark=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Red/Dark")[0].style.fills[0].color);}catch{color_red_dark=0;}
    try{var color_red=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Red/Base")[0].style.fills[0].color);}catch{color_red=0;}
    try{var color_red_light=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Red/Light")[0].style.fills[0].color);}catch{color_red_light=0;}
    try{var color_red_lighter=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Red/Lighter")[0].style.fills[0].color);}catch{color_red_lighter=0;}
    try{var color_red_lightest=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Red/Lightest")[0].style.fills[0].color);}catch{color_red_lightest=0;}
    //extended base pallete - orange
    try{var color_orange_darkest=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Orange/Darkest")[0].style.fills[0].color);}catch{color_orange_darkest=0;}
    try{var color_orange_darker=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Orange/Darker")[0].style.fills[0].color);}catch{color_orange_darker=0;}
    try{var color_orange_dark=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Orange/Dark")[0].style.fills[0].color);}catch{color_orange_dark=0;}
    try{var color_orange=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Orange/Base")[0].style.fills[0].color);}catch{color_orange=0;}
    try{var color_orange_light=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Orange/Light")[0].style.fills[0].color);}catch{color_orange_light=0;}
    try{var color_orange_lighter=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Orange/Lighter")[0].style.fills[0].color);}catch{color_orange_lighter=0;}
    try{var color_orange_lightest=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Orange/Lightest")[0].style.fills[0].color);}catch{color_orange_lightest=0;}
    //extended base pallete - yellow
    try{var color_yellow_darkest=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Yellow/Darkest")[0].style.fills[0].color);}catch{color_yellow_darkest=0;}
    try{var color_yellow_darker=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Yellow/Darker")[0].style.fills[0].color);}catch{color_yellow_darker=0;}
    try{var color_yellow_dark=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Yellow/Dark")[0].style.fills[0].color);}catch{color_yellow_dark=0;}
    try{var color_yellow=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Yellow/Base")[0].style.fills[0].color);}catch{color_yellow=0;}
    try{var color_yellow_light=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Yellow/Light")[0].style.fills[0].color);}catch{color_yellow_light=0;}
    try{var color_yellow_lighter=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Yellow/Lighter")[0].style.fills[0].color);}catch{color_yellow_lighter=0;}
    try{var color_yellow_lightest=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Yellow/Lightest")[0].style.fills[0].color);}catch{color_yellow_lightest=0;}
    //extended base pallete - lime
    try{var color_lime_darkest=trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Lime/Darkest')[0].style.fills[0].color);}catch{color_lime_darkest=0;}
    try{var color_lime_darker=trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Lime/Darker')[0].style.fills[0].color);}catch{color_lime_darker=0;}
    try{var color_lime_dark=trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Lime/Dark')[0].style.fills[0].color);}catch{color_lime_dark=0;}
    try{var color_lime=trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Lime/Base')[0].style.fills[0].color);}catch{color_lime=0;}
    try{var color_lime_light=trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Lime/Light')[0].style.fills[0].color);}catch{color_lime_light=0;}
    try{var color_lime_lighter=trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Lime/Lighter')[0].style.fills[0].color);}catch{color_lime_lighter=0;}
    try{var color_lime_lightest=trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Lime/Lightest')[0].style.fills[0].color);}catch{color_lime_lightest=0;}
    //extended base pallete - green
    try{var color_green_darkest=trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Green/Darkest')[0].style.fills[0].color);}catch{color_green_darkest=0;}
    try{var color_green_darker=trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Green/Darker')[0].style.fills[0].color);}catch{color_green_darker=0;}
    try{var color_green_dark=trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Green/Dark')[0].style.fills[0].color);}catch{color_green_dark=0;}
    try{var color_green=trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Green/Base')[0].style.fills[0].color);}catch{color_green=0;}
    try{var color_green_light=trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Green/Light')[0].style.fills[0].color);}catch{color_green_light=0;}
    try{var color_green_lighter=trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Green/Lighter')[0].style.fills[0].color);}catch{color_green_lighter=0;}
    try{var color_green_lightest=trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Green/Lightest')[0].style.fills[0].color);}catch{color_green_lightest=0;}
    //extended base pallete - teal
    try{var color_teal_darkest=trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Teal/Darkest')[0].style.fills[0].color);}catch{color_teal_darkest=0;}
    try{var color_teal_darker=trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Teal/Darker')[0].style.fills[0].color);}catch{color_teal_darker=0;}
    try{var color_teal_dark=trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Teal/Dark')[0].style.fills[0].color);}catch{color_teal_dark=0;}
    try{var color_teal=trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Teal/Base')[0].style.fills[0].color);}catch{color_teal=0;}
    try{var color_teal_light=trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Teal/Light')[0].style.fills[0].color);}catch{color_teal_light=0;}
    try{var color_teal_lighter=trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Teal/Lighter')[0].style.fills[0].color);}catch{color_teal_lighter=0;}
    try{var color_teal_lightest=trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Teal/Lightest')[0].style.fills[0].color);}catch{color_teal_lightest=0;}
    //extended base pallete - cyan
    try{var color_cyan_darkest=trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Cyan/Darkest')[0].style.fills[0].color);}catch{color_cyan_darkest=0;}
    try{var color_cyan_darker=trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Cyan/Darker')[0].style.fills[0].color);}catch{color_cyan_darker=0;}
    try{var color_cyan_dark=trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Cyan/Dark')[0].style.fills[0].color);}catch{color_cyan_dark=0;}
    try{var color_cyan=trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Cyan/Base')[0].style.fills[0].color);}catch{color_cyan=0;}
    try{var color_cyan_light=trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Cyan/Light')[0].style.fills[0].color);}catch{color_cyan_light=0;}
    try{var color_cyan_lighter=trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Cyan/Lighter')[0].style.fills[0].color);}catch{color_cyan_lighter=0;}
    try{var color_cyan_lightest=trimHexadecimal(thisDocument.getLayersNamed('Color |  Fill Colors/Extended/Cyan/Lightest')[0].style.fills[0].color);}catch{color_cyan_lightest=0;}
    //extended base pallete - blue
    try{var color_blue_darkest=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Blue/Darkest")[0].style.fills[0].color);}catch{color_blue_darkest=0;}
    try{var color_blue_darker=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Blue/Darker")[0].style.fills[0].color);}catch{color_blue_darker=0;}
    try{var color_blue_dark=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Blue/Dark")[0].style.fills[0].color);}catch{color_blue_dark=0;}
    try{var color_blue=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Blue/Base")[0].style.fills[0].color);}catch{color_blue=0;}
    try{var color_blue_light=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Blue/Light")[0].style.fills[0].color);}catch{color_blue_light=0;}
    try{var color_blue_lighter=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Blue/Lighter")[0].style.fills[0].color);}catch{color_blue_lighter=0;}
    try{var color_blue_lightest=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Blue/Lightest")[0].style.fills[0].color);}catch{color_blue_lightest=0;}
    //extended base pallete - indigo
    try{var color_indigo_darkest=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Indigo/Darkest")[0].style.fills[0].color);}catch{color_indigo_darkest=0;}
    try{var color_indigo_darker=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Indigo/Darker")[0].style.fills[0].color);}catch{color_indigo_darker=0;}
    try{var color_indigo_dark=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Indigo/Dark")[0].style.fills[0].color);}catch{color_indigo_dark=0;}
    try{var color_indigo=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Indigo/Base")[0].style.fills[0].color);}catch{color_indigo=0;}
    try{var color_indigo_light=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Indigo/Light")[0].style.fills[0].color);}catch{color_indigo_light=0;}
    try{var color_indigo_lighter=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Indigo/Lighter")[0].style.fills[0].color);}catch{color_indigo_lighter=0;}
    try{var color_indigo_lightest=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Indigo/Lightest")[0].style.fills[0].color);}catch{color_indigo_lightest=0;}
    //extended base pallete - violet
    try{var color_violet_darkest=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Violet/Darkest")[0].style.fills[0].color);}catch{color_violet_darkest=0;}
    try{var color_violet_darker=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Violet/Darker")[0].style.fills[0].color);}catch{color_violet_darker=0;}
    try{var color_violet_dark=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Violet/Dark")[0].style.fills[0].color);}catch{color_violet_dark=0;}
    try{var color_violet=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Violet/Base")[0].style.fills[0].color);}catch{color_violet=0;}
    try{var color_violet_light=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Violet/Light")[0].style.fills[0].color);}catch{color_violet_light=0;}
    try{var color_violet_lighter=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Violet/Lighter")[0].style.fills[0].color);}catch{color_violet_lighter=0;}
    try{var color_violet_lightest=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Violet/Lightest")[0].style.fills[0].color);}catch{color_violet_lightest=0;}
    //extended base pallete - grape
    try{var color_grape_darkest=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Grape/Darkest")[0].style.fills[0].color);}catch{color_grape_darkest=0;}
    try{var color_grape_darker=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Grape/Darker")[0].style.fills[0].color);}catch{color_grape_darker=0;}
    try{var color_grape_dark=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Grape/Dark")[0].style.fills[0].color);}catch{color_grape_dark=0;}
    try{var color_grape=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Grape/Base")[0].style.fills[0].color);}catch{color_grape=0;}
    try{var color_grape_light=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Grape/Light")[0].style.fills[0].color);}catch{color_grape_light=0;}
    try{var color_grape_lighter=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Grape/Lighter")[0].style.fills[0].color);}catch{color_grape_lighter=0;}
    try{var color_grape_lightest=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Grape/Lightest")[0].style.fills[0].color);}catch{color_grape_lightest=0;}
    //extended base pallete - pink
    try{var color_pink_darkest=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Pink/Darkest")[0].style.fills[0].color);}catch{color_pink_darkest=0;}
    try{var color_pink_darker=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Pink/Darker")[0].style.fills[0].color);}catch{color_pink_darker=0;}
    try{var color_pink_dark=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Pink/Dark")[0].style.fills[0].color);}catch{color_pink_dark=0;}
    try{var color_pink=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Pink/Base")[0].style.fills[0].color);}catch{color_pink=0;}
    try{var color_pink_light=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Pink/Light")[0].style.fills[0].color);}catch{color_pink_light=0;}
    try{var color_pink_lighter=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Pink/Lighter")[0].style.fills[0].color);}catch{color_pink_lighter=0;}
    try{var color_pink_lightest=trimHexadecimal(thisDocument.getLayersNamed("Color |  Fill Colors/Extended/Pink/Lightest")[0].style.fills[0].color);}catch{color_pink_lightest=0;}
    //shadows/elevation
    var shadow_none = "none";
    var shadow_xs = createAttribute_Shadow('Shadows/XS');
    var shadow_s = createAttribute_Shadow('Shadows/S');
    var shadow_m = createAttribute_Shadow('Shadows/M');
    var shadow_l = createAttribute_Shadow('Shadows/L');
    var shadow_xl = createAttribute_Shadow('Shadows/XL');
    //spacing
    var space_none = 0;
    try{var space_xs=thisDocument.getLayersNamed("Spacing/XS")[0].frame.width;}catch{space_xs=0;}
    try{var space_s=thisDocument.getLayersNamed("Spacing/S")[0].frame.width;}catch{space_s=0;}
    try{var space_base=thisDocument.getLayersNamed("Spacing/Base")[0].frame.width;}catch{space_base=0;}
    try{var space_m=thisDocument.getLayersNamed("Spacing/M")[0].frame.width;}catch{space_m=0;}
    try{var space_l=thisDocument.getLayersNamed("Spacing/L")[0].frame.width;}catch{space_l=0;}
    try{var space_xl=thisDocument.getLayersNamed("Spacing/XL")[0].frame.width;}catch{space_xl=0;}
    try{var space_xxl=thisDocument.getLayersNamed("Spacing/XXL")[0].frame.width;}catch{space_xxl=0;}
    //border sizes
    var border_size_none = 0;
    try{var border_size_s=thisDocument.getLayersNamed("Border/S")[0].style.borders[0].thickness;}catch{border_size_s=0;}
    try{var border_size_m=thisDocument.getLayersNamed("Border/M")[0].style.borders[0].thickness;}catch{border_size_m=0;}
    try{var border_size_l=thisDocument.getLayersNamed("Border/L")[0].style.borders[0].thickness;}catch{border_size_l=0;}
    //border radius
    var border_radius_none = 0;
    try{var border_radius_soft=thisDocument.getLayersNamed("Border/Shapes/Soft")[0].points[0].cornerRadius;}catch{border_radius_soft=0;}
    try{var border_radius_rounded=thisDocument.getLayersNamed("Border/Shapes/Rounded")[0].points[0].cornerRadius;}catch{border_radius_rounded=0;}
    var border_radius_circle = "100%"; 
    //layout stuff
    try{var header_color=trimHexadecimal(thisDocument.getLayersNamed("Color | Layout Colors/Header Background")[0].style.fills[0].color);}catch{header_color=0;}
    try{var color_background_body=trimHexadecimal(thisDocument.getLayersNamed("Color | Layout Colors/Content Background")[0].style.fills[0].color);}catch{color_background_body=0;}
    try{var color_background_login=trimHexadecimal(thisDocument.getLayersNamed("Color | Layout Colors/Login Background")[0].style.fills[0].color);}catch{color_background_login=0;}
    try{var header_size=thisDocument.getLayersNamed("Layout/Navigation/Top Menu/Desktop")[0].frame.height;}catch{header_size=0;}
    //typography
    try{var font_family=thisDocument.getLayersNamed("Typography | Typeface")[0].style.fontFamily;}catch{font_family=0;}
    var fontValue = 0;
    try{fontValue=thisDocument.getLayersNamed("Typography | FontWeight/Light")[0].style.fontWeight}catch{fontValue=0;}
    var font_light = validateFontWeight(fontValue);
    try{fontValue=thisDocument.getLayersNamed("Typography | FontWeight/Regular")[0].style.fontWeight}catch{fontValue=0;}
    var font_regular = validateFontWeight(fontValue);
    try{fontValue=thisDocument.getLayersNamed("Typography | FontWeight/Semibold")[0].style.fontWeight}catch{fontValue=0;}
    var font_semi_bold = validateFontWeight(fontValue);
    try{fontValue=thisDocument.getLayersNamed("Typography | FontWeight/Bold")[0].style.fontWeight}catch{fontValue=0;}
    var font_bold = validateFontWeight(fontValue);
    //font sizes desktop
    try{var font_size_display_desktop=thisDocument.getLayersNamed("Typography | Font Size/Desktop/Display")[0].style.fontSize;}catch{font_size_display_desktop=0;}
    try{var font_size_h1_desktop=thisDocument.getLayersNamed("Typography | Font Size/Desktop/H1")[0].style.fontSize;}catch{font_size_h1_desktop=0;}
    try{var font_size_h2_desktop=thisDocument.getLayersNamed("Typography | Font Size/Desktop/H2")[0].style.fontSize;}catch{font_size_h2_desktop=0;}
    try{var font_size_h3_desktop=thisDocument.getLayersNamed("Typography | Font Size/Desktop/H3")[0].style.fontSize;}catch{font_size_h3_desktop=0;}
    try{var font_size_h4_desktop=thisDocument.getLayersNamed("Typography | Font Size/Desktop/H4")[0].style.fontSize;}catch{font_size_h4_desktop=0;}
    try{var font_size_h5_desktop=thisDocument.getLayersNamed("Typography | Font Size/Desktop/H5")[0].style.fontSize;}catch{font_size_h5_desktop=0;}
    try{var font_size_h6_desktop=thisDocument.getLayersNamed("Typography | Font Size/Desktop/H6")[0].style.fontSize;}catch{font_size_h6_desktop=0;}
    try{var font_size_base_desktop=thisDocument.getLayersNamed("Typography | Font Size/Desktop/Body")[0].style.fontSize;}catch{font_size_base_desktop=0;}
    try{var font_size_s_desktop=thisDocument.getLayersNamed("Typography | Font Size/Desktop/Body S")[0].style.fontSize;}catch{font_size_s_desktop=0;}
    try{var font_size_xs_desktop=thisDocument.getLayersNamed("Typography | Font Size/Desktop/Body XS")[0].style.fontSize;}catch{font_size_xs_desktop=0;}
    //font sizes tablet
    try{var font_size_display_tablet=thisDocument.getLayersNamed("Typography | Font Size/Tablet/Display")[0].style.fontSize;}catch{font_size_display_tablet=0;}
    try{var font_size_h1_tablet=thisDocument.getLayersNamed("Typography | Font Size/Tablet/H1")[0].style.fontSize;}catch{font_size_h1_tablet=0;}
    try{var font_size_h2_tablet=thisDocument.getLayersNamed("Typography | Font Size/Tablet/H2")[0].style.fontSize;}catch{font_size_h2_tablet=0;}
    try{var font_size_h3_tablet=thisDocument.getLayersNamed("Typography | Font Size/Tablet/H3")[0].style.fontSize;}catch{font_size_h3_tablet=0;}
    try{var font_size_h4_tablet=thisDocument.getLayersNamed("Typography | Font Size/Tablet/H4")[0].style.fontSize;}catch{font_size_h4_tablet=0;}
    try{var font_size_h5_tablet=thisDocument.getLayersNamed("Typography | Font Size/Tablet/H5")[0].style.fontSize;}catch{font_size_h5_tablet=0;}
    try{var font_size_h6_tablet=thisDocument.getLayersNamed("Typography | Font Size/Tablet/H6")[0].style.fontSize;}catch{font_size_h6_tablet=0;}
    try{var font_size_base_tablet=thisDocument.getLayersNamed("Typography | Font Size/Tablet/Body")[0].style.fontSize;}catch{font_size_base_tablet=0;}
    try{var font_size_s_tablet=thisDocument.getLayersNamed("Typography | Font Size/Tablet/Body S")[0].style.fontSize;}catch{font_size_s_tablet=0;}
    try{var font_size_xs_tablet=thisDocument.getLayersNamed("Typography | Font Size/Tablet/Body XS")[0].style.fontSize;}catch{font_size_xs_tablet=0;}
    //font sizes phone
    try{var font_size_display_phone=thisDocument.getLayersNamed("Typography | Font Size/Phone/Display")[0].style.fontSize;}catch{font_size_display_phone=0;}
    try{var font_size_h1_phone=thisDocument.getLayersNamed("Typography | Font Size/Phone/H1")[0].style.fontSize;}catch{font_size_h1_phone=0;}
    try{var font_size_h2_phone=thisDocument.getLayersNamed("Typography | Font Size/Phone/H2")[0].style.fontSize;}catch{font_size_h2_phone=0;}
    try{var font_size_h3_phone=thisDocument.getLayersNamed("Typography | Font Size/Phone/H3")[0].style.fontSize;}catch{font_size_h3_phone=0;}
    try{var font_size_h4_phone=thisDocument.getLayersNamed("Typography | Font Size/Phone/H4")[0].style.fontSize;}catch{font_size_h4_phone=0;}
    try{var font_size_h5_phone=thisDocument.getLayersNamed("Typography | Font Size/Phone/H5")[0].style.fontSize;}catch{font_size_h5_phone=0;}
    try{var font_size_h6_phone=thisDocument.getLayersNamed("Typography | Font Size/Phone/H6")[0].style.fontSize;}catch{font_size_h6_phone=0;}
    try{var font_size_base_phone=thisDocument.getLayersNamed("Typography | Font Size/Phone/Body")[0].style.fontSize;}catch{font_size_base_phone=0;}
    try{var font_size_s_phone=thisDocument.getLayersNamed("Typography | Font Size/Phone/Body S")[0].style.fontSize;}catch{font_size_s_phone=0;}
    try{var font_size_xs_phone=thisDocument.getLayersNamed("Typography | Font Size/Phone/Body XS")[0].style.fontSize;}catch{font_size_xs_phone=0;}
    //extra stuff that we need to send to plugin
    try{var search_input_padding=thisDocument.getLayersNamed("03. Interaction / 11. Search/Desktop")[0].layers[1].frame.x;}catch{search_input_padding=0;}
    try{var alert_border_radius=thisDocument.getLayersNamed("Symbol | Content / Card / Background")[0].overrides[0].affectedLayer.points[0].cornerRadius;}catch{alert_border_radius=0;}
    try{var btn_border_radius=thisDocument.getLayersNamed("07. Widgets/01. Buttons/Primary Button/Default")[0].layers[0].overrides[0].affectedLayer.points[0].cornerRadius;}catch{btn_border_radius=0;}
    try{var form_control_data_input=thisDocument.getLayersNamed("07. Widgets/ 06. Input / Desktop / Basic")[0].layers[0].layers[0].overrides[0].affectedLayer.points[0].cornerRadius;}catch{form_control_data_input=0;}
    try{var tag_border_radius=thisDocument.getLayersNamed("02. Content / 08. Tag / Default")[0].layers[0].overrides[0].affectedLayer.points[0].cornerRadius;}catch{tag_border_radius=0;}
    try{var search_border_radius=thisDocument.getLayersNamed("03. Interaction / 11. Search/Desktop")[0].layers[0].overrides[0].affectedLayer.points[0].cornerRadius;}catch{search_border_radius=0;}
    try{var choices_item=thisDocument.getLayersNamed("03. Interaction / 07. Dropdown Tags / Isolated/ Active")[0].layers[0].overrides[0].affectedLayer.points[0].cornerRadius}catch{choices_item=0;}
    try{var choices_inner=thisDocument.getLayersNamed("03. Interaction/06. Dropdown Search/Desktop/Basic")[0].layers[0].layers[0].overrides[0].affectedLayer.points[0].cornerRadius}catch{choices_inner=0;}
    try{var checkbox=thisDocument.getLayersNamed("07. Widgets/03. Checkbox / Checkbox / Normal")[0].layers[0].overrides[0].affectedLayer.points[0].cornerRadius;}catch{checkbox=0;}
    try{var button_group=thisDocument.getLayersNamed("07. Widgets/03. Checkbox / Checkbox / Normal")[0].layers[0].overrides[0].affectedLayer.points[0].cornerRadius;}catch{button_group=0;}
    try{var calendar=thisDocument.getLayersNamed("03. Interaction / 04. Date Picker / Pieces / Selected Day")[0].layers[0].overrides[0].affectedLayer.points[0].cornerRadius;}catch{calendar=0;}
    try{var pagination=thisDocument.getLayersNamed("04. Navigation / 05. Pagination / Shape 5+/ Mobile")[0].overrides[2].affectedLayer.points[0].cornerRadius;}catch{pagination=0;}
    try{var dropdown=thisDocument.getLayersNamed("07. Widgets/04. Dropdown/Desktop/Basic")[0].layers[0].layers[0].overrides[0].affectedLayer.points[0].cornerRadius;}catch{dropdown=0;}
    //get colors for login form box
    try{var color_background_login_form=trimHexadecimal(thisDocument.getLayersNamed("Layout / Login / Center")[0].layers[1].layers[0].layers[0].style.fills[0].color);}catch{color_background_login_form=0;}
    try{var color_animated_text_login_form=trimHexadecimal(thisDocument.getLayersNamed("Layout / Login / Center")[0].layers[1].layers[5].layers[1].style.textColor);}catch{color_animated_text_login_form=0;}
    try{var color_label_login_form=trimHexadecimal(thisDocument.getLayersNamed("Layout / Login / Center / Checkbox Text")[0].style.textColor);}catch{color_label_login_form=0;}
    try{var color_link_login_form=trimHexadecimal(thisDocument.getLayersNamed("Layout / Login / Center / Link")[0].style.textColor);}catch{color_link_login_form=0;}
    try{var color_title_login_form=trimHexadecimal(thisDocument.getLayersNamed("Layout / Login / Center / Title")[0].style.textColor);}catch{color_title_login_form=0;}
    
    //array with all values that will be sent yo webview
    var array_value = {
    primary_color,secondary_color,color_info,color_info_light,color_success,color_success_light,color_warning,color_warning_light,color_error,color_error_light,color_neutral_0,color_neutral_1,color_neutral_2,color_neutral_3,color_neutral_4,color_neutral_5,color_neutral_6,color_neutral_7,color_neutral_8,color_neutral_9,color_neutral_10,color_red_darkest,color_red_darker,color_red_dark,color_red,color_red_light,color_red_lighter,color_red_lightest,color_orange_darkest,color_orange_darker,color_orange_dark,color_orange,color_orange_light,color_orange_lighter,color_orange_lightest,color_yellow_darkest,color_yellow_darker,color_yellow_dark,color_yellow,color_yellow_light,color_yellow_lighter,color_yellow_lightest,color_lime_darkest,color_lime_darker,color_lime_dark,color_lime,color_lime_light,color_lime_lighter,color_lime_lightest,color_green_darkest,color_green_darker,color_green_dark,color_green,color_green_light,color_green_lighter,color_green_lightest,color_teal_darkest,color_teal_darker,color_teal_dark,color_teal,color_teal_light,color_teal_lighter,color_teal_lightest,color_cyan_darkest,color_cyan_darker,color_cyan_dark,color_cyan,color_cyan_light,color_cyan_lighter,color_cyan_lightest,color_blue_darkest,color_blue_darker,color_blue_dark,color_blue,color_blue_light,color_blue_lighter,color_blue_lightest,color_indigo_darkest,color_indigo_darker,color_indigo_dark,color_indigo,color_indigo_light,color_indigo_lighter,color_indigo_lightest,color_violet_darkest,color_violet_darker,color_violet_dark,color_violet,color_violet_light,color_violet_lighter,color_violet_lightest,color_grape_darkest,color_grape_darker,color_grape_dark,color_grape,color_grape_light,color_grape_lighter,color_grape_lightest,color_pink_darkest,color_pink_darker,color_pink_dark,color_pink,color_pink_light,color_pink_lighter,color_pink_lightest,shadow_none, shadow_xs, shadow_s, shadow_m, shadow_l, shadow_xl,space_none, space_s, space_xs, space_base, space_m, space_l, space_xl, space_xxl,border_size_none, border_size_s, border_size_m, border_size_l,border_radius_none, border_radius_soft, border_radius_rounded, border_radius_circle,header_color, color_background_body, header_size, color_background_login,font_family, font_light, font_regular, font_semi_bold, font_bold,font_size_display_desktop, font_size_h1_desktop, font_size_h2_desktop, font_size_h3_desktop, font_size_h4_desktop, font_size_h5_desktop, font_size_h6_desktop, font_size_base_desktop, font_size_s_desktop, font_size_xs_desktop,font_size_display_tablet, font_size_h1_tablet, font_size_h2_tablet, font_size_h3_tablet, font_size_h4_tablet, font_size_h5_tablet, font_size_h6_tablet, font_size_base_tablet, font_size_s_tablet, font_size_xs_tablet,font_size_display_phone, font_size_h1_phone, font_size_h2_phone, font_size_h3_phone, font_size_h4_phone, font_size_h5_phone, font_size_h6_phone, font_size_base_phone, font_size_s_phone, font_size_xs_phone,
    search_input_padding, alert_border_radius, btn_border_radius, form_control_data_input, 
    tag_border_radius, search_border_radius, choices_item, choices_inner, checkbox, button_group, calendar, pagination, dropdown,
    color_background_login_form, color_animated_text_login_form, color_label_login_form, color_link_login_form, color_title_login_form
    };

    return JSON.stringify(array_value); //string to send to webview

}

//transform font weight in a valid CSS value
function validateFontWeight(fontWeight) {
  
  switch (fontWeight) {
    case 1: return "100";
    case 2: return "200";
    case 3: return "300";
    case 4: return "400";
    case 5: return "500";
    case 6: return "600";
    case 7: return "700";
    case 8: return "800";
    default: return "900";
  }

}

//remove last two chars from a decimal value (alpha channel from sketch) because we don't need them
function trimHexadecimal(hexadecimal) {
  return hexadecimal.slice(0, -2);
}

//create the final shadow attribute. Should receive a shadow array
function createAttribute_Shadow(sharedLayerID) {

  var thisDocument = require('sketch/dom').getSelectedDocument();

  try {
    var x = thisDocument.getLayersNamed(sharedLayerID)[0].style.shadows[0].x;
    var y = thisDocument.getLayersNamed(sharedLayerID)[0].style.shadows[0].y;
    var blur = thisDocument.getLayersNamed(sharedLayerID)[0].style.shadows[0].blur;
    var color = thisDocument.getLayersNamed(sharedLayerID)[0].style.shadows[0].color;

    //return sharedLayerID;
    return x + "px " + y + "px " + blur + "px " + hexToRGBA(color);
  } catch (error) {
    return "0px 0px 0px rgba(0,0,0,1)";
  }
    
}

/* Get alpha value from hexadecimal */
const getAlphafloat = (a, alpha) => {
    if (typeof a !== "undefined") {return a / 255}
    if ((typeof alpha != "number") || alpha <0 || alpha >1){
      return 1
    }
    return alpha
}

//variables for hexToRGBA function
const isValidHex = (hex) => /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hex)
const getChunksFromString = (st, chunkSize) => st.match(new RegExp(`.{${chunkSize}}`, "g"))
const convertHexUnitTo256 = (hexStr) => parseInt(hexStr.repeat(2 / hexStr.length), 16)

/* Convert Hexadecimal to RGBA */
const hexToRGBA = (hex, alpha) => {
    if (!isValidHex(hex)) {throw new Error("Invalid HEX")}
    const chunkSize = Math.floor((hex.length - 1) / 3)
    const hexArr = getChunksFromString(hex.slice(1), chunkSize)
    const [r, g, b, a] = hexArr.map(convertHexUnitTo256)
    return `rgba(${r}, ${g}, ${b}, ${getAlphafloat(a, alpha).toFixed(2)})`
}

/*************************/
/*    Extra Functions    */
/*************************/

//When name of layer changed
export function onRenameLayer(context) {
  UI.alert("Watch out...", "Changing some layers names can make plugin to stop working.");
}

//About
export function about(context) {
  //UI.alert("Design to Code - Sketch Plugin", "Plugin developed by Hi Interactive in partnership width OutSystems.");

  const optionsAbout = {
    identifier: webviewABoutIdentifier,
    width: 800,
    height: 600,
    show: false,
    resizable: true,
    minimizable: true,
    maximizable: false,
    alwaysOnTop: true,
    titleBarStyle: "hiddenInset"
  }

  const aboutWindow = new BrowserWindow(optionsAbout);
  const webContentsAbout = aboutWindow.webContents;

  aboutWindow.once('ready-to-show', () => {
    aboutWindow.show()
  })

  aboutWindow.loadURL(require('../resources/webview_about.html')); //webview to load


}

//Download OS UI Sketch
export function outsystemsui_sketch(context) {
  UI.message('Hello Sketch');
  NSWorkspace.sharedWorkspace().openURL(NSURL.URLWithString("sketch://add-library?url=https://design-plugins.hi-interactive.pt/sketch.xml"));
}

//More about OS UI
export function outsystemsui(context) {
  UI.message('Hello Sketch');
  NSWorkspace.sharedWorkspace().openURL(NSURL.URLWithString("https://outsystemsui.outsystems.com/OutsystemsUiWebsite/"));
}
