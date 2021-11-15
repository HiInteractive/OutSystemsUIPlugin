import UI from 'sketch/ui';

/*************************/
/*    Extra Functions    */
/*************************/

//About
export function about(context) {
    UI.alert("About", "Plugin developed by Hi Interactive in partnership width OutSystems.");
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