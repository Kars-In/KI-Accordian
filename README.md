# KI-Accordian

KI-accordion is  a js/css framework that creates a accordion like structure.

KI-accordion is designed to work on angular.js 

angular version of KI-Accordian works completely on html tags.

to build an application with angular ki-accordion

KI-accordion is built on four custom html elements
<table>
<tr><td> &lt;ki-accordion> </td><td>Wrapper element for the entire accordion</td>
 
<tr><td>  &lt;ki-pane>      </td><td> Wrapper Elemnt for each accordion element</td>
  
<tr><td>  &lt;ki-pane-head> </td><td> Wrapper element for Header of accordion</td>
  
 <tr><td>  &lt;ki-pane-body> </td><td> Wrapper element for content of accordion</td>
  </table>
  
  Any Styles that need to be applied to the accordion can be applied with the help of classes
  <table>
  <tr><td>.KI-Accordion</td> <td> &lt;ki-accordion></td></tr>
  <tr><td>.KI-HoverWrap</td> <td> &lt;ki-pane></td></tr>
  <tr><td>.KI-HoverHead</td> <td> &lt;ki-pane-head></td></tr>
  <tr><td>.KI-HoverBody</td> <td> &lt;ki-pane-body> </td></tr>
  </table>
