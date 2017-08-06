/*!
* The MIT License (MIT)
* 
* Copyright (c) 2007-2017 Einar Lielmanis, Liam Newman, and contributors.
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
Object.values||(Object.values=function(e){if(e!==Object(e))throw new TypeError("Object.values called on a non-object");var t,n=[];for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.push(e[t]);return n}),function(){function e(e,t){var n,i={};for(n in e)n!==t&&(i[n]=e[n]);if(t in e)for(n in e[t])i[n]=e[t][n];return i}function t(t,n){function i(e,t){for(var n=0;n<t.length;n+=1)if(t[n]===e)return!0;return!1}function r(e){return e.replace(/^\s+|\s+$/g,"")}function _(e){return e.replace(/^\s+/g,"")}function a(e){e=e||p.before_newline;var t=Object.values(p);if(!i(e,t))throw new Error("Invalid Option Value: The option 'operator_position' must be one of the following values\n"+t+"\nYou passed in: '"+e+"'");return e}function o(t,n){"use strict";function o(e,t){var n=0;return e&&(n=e.indentation_level,!$.just_added_newline()&&e.line_indent_level>n&&(n=e.line_indent_level)),{mode:t,parent:e,last_text:e?e.last_text:"",last_word:e?e.last_word:"",declaration_statement:!1,declaration_assignment:!1,multiline_frame:!1,inline_frame:!1,if_block:!1,else_block:!1,do_block:!1,do_while:!1,import_block:!1,in_case_statement:!1,in_case:!1,case_body:!1,indentation_level:n,line_indent_level:e?e.line_indent_level:n,start_line_index:$.get_line_number(),ternary_depth:0}}function s(e,t){for(var n=e.newlines,i=_e.keep_array_indentation&&v(ee.mode),r=Y,_=0;_<e.comments_before.length;_++)Y=e.comments_before[_],s(Y,t),re[Y.type](t);if(Y=r,i)for(var a=0;a<n;a+=1)T(a>0,t);else if(_e.max_preserve_newlines&&n>_e.max_preserve_newlines&&(n=_e.max_preserve_newlines),_e.preserve_newlines&&e.newlines>1){T(!1,t);for(var o=1;o<n;o+=1)T(!0,t)}}function h(e){e=e.replace(f.allLineBreaks,"\n");for(var t=[],n=e.indexOf("\n");-1!==n;)t.push(e.substring(0,n)),e=e.substring(n+1),n=e.indexOf("\n");return e.length&&t.push(e),t}function E(e){if(e=void 0!==e&&e,!$.just_added_newline()){var t=_e.preserve_newlines&&Y.wanted_newline||e;if(i(ee.last_text,G.positionable_operators)||i(Y.text,G.positionable_operators)){var n=i(ee.last_text,G.positionable_operators)&&i(_e.operator_position,d)||i(Y.text,G.positionable_operators);t=t&&n}if(t)T(!1,!0);else if(_e.wrap_line_length){if("TK_RESERVED"===q&&i(ee.last_text,ce))return;var r=$.current_line.get_character_count()+Y.text.length+($.space_before_token?1:0);r>=_e.wrap_line_length&&T(!1,!0)}}}function T(e,t){if(!t&&";"!==ee.last_text&&","!==ee.last_text&&"="!==ee.last_text&&"TK_OPERATOR"!==q)for(var n=D(1);!(ee.mode!==u.Statement||ee.if_block&&n&&"TK_RESERVED"===n.type&&"else"===n.text||ee.do_block);)k();$.add_new_line(e)&&(ee.multiline_frame=!0)}function x(){$.just_added_newline()&&(_e.keep_array_indentation&&v(ee.mode)&&Y.wanted_newline?($.current_line.push(Y.whitespace_before),$.space_before_token=!1):$.set_indent(ee.indentation_level)&&(ee.line_indent_level=ee.indentation_level))}function R(e){if($.raw)return void $.add_raw_token(Y);if(_e.comma_first&&"TK_COMMA"===q&&$.just_added_newline()&&","===$.previous_line.last()){var t=$.previous_line.pop();$.previous_line.is_empty()&&($.previous_line.push(t),$.trim(!0),$.current_line.pop(),$.trim()),x(),$.add_token(","),$.space_before_token=!0}e=e||Y.text,x(),$.add_token(e)}function K(){ee.indentation_level+=1}function m(){ee.indentation_level>0&&(!ee.parent||ee.indentation_level>ee.parent.indentation_level)&&(ee.indentation_level-=1)}function b(e){ee?(ne.push(ee),te=ee):te=o(null,e),ee=o(te,e)}function v(e){return e===u.ArrayLiteral}function w(e){return i(e,[u.Expression,u.ForInitializer,u.Conditional])}function k(){ne.length>0&&(te=ee,ee=ne.pop(),te.mode===u.Statement&&$.remove_redundant_indentation(te))}function O(){return ee.parent.mode===u.ObjectLiteral&&ee.mode===u.Statement&&(":"===ee.last_text&&0===ee.ternary_depth||"TK_RESERVED"===q&&i(ee.last_text,["get","set"]))}function S(){return!!("TK_RESERVED"===q&&i(ee.last_text,["var","let","const"])&&"TK_WORD"===Y.type||"TK_RESERVED"===q&&"do"===ee.last_text||"TK_RESERVED"===q&&i(ee.last_text,["return","throw"])&&!Y.wanted_newline||"TK_RESERVED"===q&&"else"===ee.last_text&&("TK_RESERVED"!==Y.type||"if"!==Y.text||Y.comments_before.length)||"TK_END_EXPR"===q&&(te.mode===u.ForInitializer||te.mode===u.Conditional)||"TK_WORD"===q&&ee.mode===u.BlockStatement&&!ee.in_case&&"--"!==Y.text&&"++"!==Y.text&&"function"!==H&&"TK_WORD"!==Y.type&&"TK_RESERVED"!==Y.type||ee.mode===u.ObjectLiteral&&(":"===ee.last_text&&0===ee.ternary_depth||"TK_RESERVED"===q&&i(ee.last_text,["get","set"])))&&(b(u.Statement),K(),s(Y,!0),O()||E("TK_RESERVED"===Y.type&&i(Y.text,["do","for","if","while"])),!0)}function y(e,t){for(var n=0;n<e.length;n++){if(r(e[n]).charAt(0)!==t)return!1}return!0}function g(e,t){for(var n,i=0,r=e.length;i<r;i++)if((n=e[i])&&0!==n.indexOf(t))return!1;return!0}function A(e){return i(e,["case","return","do","if","throw","else"])}function D(e){var t=Z+(e||0);return t<0||t>=ae.length?null:ae[t]}function C(){S()||s(Y);var e=u.Expression;if("["===Y.text){if("TK_WORD"===q||")"===ee.last_text)return"TK_RESERVED"===q&&i(ee.last_text,G.line_starters)&&($.space_before_token=!0),b(e),R(),K(),void(_e.space_in_paren&&($.space_before_token=!0));e=u.ArrayLiteral,v(ee.mode)&&("["!==ee.last_text&&(","!==ee.last_text||"]"!==H&&"}"!==H)||_e.keep_array_indentation||T())}else"TK_RESERVED"===q&&"for"===ee.last_text?e=u.ForInitializer:"TK_RESERVED"===q&&i(ee.last_text,["if","while"])&&(e=u.Conditional);";"===ee.last_text||"TK_START_BLOCK"===q?T():"TK_END_EXPR"===q||"TK_START_EXPR"===q||"TK_END_BLOCK"===q||"."===ee.last_text?E(Y.wanted_newline):"TK_RESERVED"===q&&"("===Y.text||"TK_WORD"===q||"TK_OPERATOR"===q?"TK_RESERVED"===q&&("function"===ee.last_word||"typeof"===ee.last_word)||"*"===ee.last_text&&(i(H,["function","yield"])||ee.mode===u.ObjectLiteral&&i(H,["{",","]))?_e.space_after_anon_function&&($.space_before_token=!0):"TK_RESERVED"!==q||!i(ee.last_text,G.line_starters)&&"catch"!==ee.last_text||_e.space_before_conditional&&($.space_before_token=!0):$.space_before_token=!0,"("===Y.text&&"TK_RESERVED"===q&&"await"===ee.last_word&&($.space_before_token=!0),"("===Y.text&&("TK_EQUALS"!==q&&"TK_OPERATOR"!==q||O()||E()),"("===Y.text&&"TK_WORD"!==q&&"TK_RESERVED"!==q&&E(),b(e),R(),_e.space_in_paren&&($.space_before_token=!0),K()}function N(){for(;ee.mode===u.Statement;)k();s(Y),ee.multiline_frame&&E("]"===Y.text&&v(ee.mode)&&!_e.keep_array_indentation),_e.space_in_paren&&("TK_START_EXPR"!==q||_e.space_in_empty_paren?$.space_before_token=!0:($.trim(),$.space_before_token=!1)),"]"===Y.text&&_e.keep_array_indentation?(R(),k()):(k(),R()),$.remove_redundant_indentation(te),ee.do_while&&te.mode===u.Conditional&&(te.mode=u.Expression,ee.do_block=!1,ee.do_while=!1)}function L(){s(Y);var e=D(1),t=D(2);b(t&&(i(t.text,[":",","])&&i(e.type,["TK_STRING","TK_WORD","TK_RESERVED"])||i(e.text,["get","set","..."])&&i(t.type,["TK_WORD","TK_RESERVED"]))?i(H,["class","interface"])?u.BlockStatement:u.ObjectLiteral:"TK_OPERATOR"===q&&"=>"===ee.last_text?u.BlockStatement:i(q,["TK_EQUALS","TK_START_EXPR","TK_COMMA","TK_OPERATOR"])||"TK_RESERVED"===q&&i(ee.last_text,["return","throw","import","default"])?u.ObjectLiteral:u.BlockStatement);var n=!e.comments_before.length&&"}"===e.text,r=n&&"function"===ee.last_word&&"TK_END_EXPR"===q;if(_e.brace_preserve_inline){var _=0,a=null;ee.inline_frame=!0;do{if(_+=1,a=D(_),a.wanted_newline){ee.inline_frame=!1;break}}while("TK_EOF"!==a.type&&("TK_END_BLOCK"!==a.type||a.opened!==Y))}("expand"===_e.brace_style||"none"===_e.brace_style&&Y.wanted_newline)&&!ee.inline_frame?"TK_OPERATOR"!==q&&(r||"TK_EQUALS"===q||"TK_RESERVED"===q&&A(ee.last_text)&&"else"!==ee.last_text)?$.space_before_token=!0:T(!1,!0):(!v(te.mode)||"TK_START_EXPR"!==q&&"TK_COMMA"!==q||(("TK_COMMA"===q||_e.space_in_paren)&&($.space_before_token=!0),("TK_COMMA"===q||"TK_START_EXPR"===q&&ee.inline_frame)&&(E(),te.multiline_frame=te.multiline_frame||ee.multiline_frame,ee.multiline_frame=!1)),"TK_OPERATOR"!==q&&"TK_START_EXPR"!==q&&("TK_START_BLOCK"!==q||ee.inline_frame?$.space_before_token=!0:T())),R(),K()}function V(){for(s(Y);ee.mode===u.Statement;)k();var e="TK_START_BLOCK"===q;ee.inline_frame&&!e?$.space_before_token=!0:"expand"===_e.brace_style?e||T():e||(v(ee.mode)&&_e.keep_array_indentation?(_e.keep_array_indentation=!1,T(),_e.keep_array_indentation=!0):T()),k(),R()}function P(){if("TK_RESERVED"===Y.type)if(i(Y.text,["set","get"])&&ee.mode!==u.ObjectLiteral)Y.type="TK_WORD";else if(i(Y.text,["as","from"])&&!ee.import_block)Y.type="TK_WORD";else if(ee.mode===u.ObjectLiteral){var e=D(1);":"===e.text&&(Y.type="TK_WORD")}if(S()?"TK_RESERVED"===q&&i(ee.last_text,["var","let","const"])&&"TK_WORD"===Y.type&&(ee.declaration_statement=!0):!Y.wanted_newline||w(ee.mode)||"TK_OPERATOR"===q&&"--"!==ee.last_text&&"++"!==ee.last_text||"TK_EQUALS"===q||!_e.preserve_newlines&&"TK_RESERVED"===q&&i(ee.last_text,["var","let","const","set","get"])?s(Y):(s(Y),T()),ee.do_block&&!ee.do_while){if("TK_RESERVED"===Y.type&&"while"===Y.text)return $.space_before_token=!0,R(),$.space_before_token=!0,void(ee.do_while=!0);T(),ee.do_block=!1}if(ee.if_block)if(ee.else_block||"TK_RESERVED"!==Y.type||"else"!==Y.text){for(;ee.mode===u.Statement;)k();ee.if_block=!1,ee.else_block=!1}else ee.else_block=!0;if("TK_RESERVED"===Y.type&&("case"===Y.text||"default"===Y.text&&ee.in_case_statement))return T(),(ee.case_body||_e.jslint_happy)&&(m(),ee.case_body=!1),R(),ee.in_case=!0,void(ee.in_case_statement=!0);if("TK_COMMA"!==q&&"TK_START_EXPR"!==q&&"TK_EQUALS"!==q&&"TK_OPERATOR"!==q||O()||E(),"TK_RESERVED"===Y.type&&"function"===Y.text)return(i(ee.last_text,["}",";"])||$.just_added_newline()&&!i(ee.last_text,["(","[","{",":","=",","])&&"TK_OPERATOR"!==q)&&($.just_added_blankline()||Y.comments_before.length||(T(),T(!0))),"TK_RESERVED"===q||"TK_WORD"===q?"TK_RESERVED"===q&&i(ee.last_text,["get","set","new","return","export","async"])?$.space_before_token=!0:"TK_RESERVED"===q&&"default"===ee.last_text&&"export"===H?$.space_before_token=!0:T():"TK_OPERATOR"===q||"="===ee.last_text?$.space_before_token=!0:(ee.multiline_frame||!w(ee.mode)&&!v(ee.mode))&&T(),R(),void(ee.last_word=Y.text);if(ie="NONE","TK_END_BLOCK"===q?te.inline_frame?ie="SPACE":"TK_RESERVED"===Y.type&&i(Y.text,["else","catch","finally","from"])?"expand"===_e.brace_style||"end-expand"===_e.brace_style||"none"===_e.brace_style&&Y.wanted_newline?ie="NEWLINE":(ie="SPACE",$.space_before_token=!0):ie="NEWLINE":"TK_SEMICOLON"===q&&ee.mode===u.BlockStatement?ie="NEWLINE":"TK_SEMICOLON"===q&&w(ee.mode)?ie="SPACE":"TK_STRING"===q?ie="NEWLINE":"TK_RESERVED"===q||"TK_WORD"===q||"*"===ee.last_text&&(i(H,["function","yield"])||ee.mode===u.ObjectLiteral&&i(H,["{",","]))?ie="SPACE":"TK_START_BLOCK"===q?ie=ee.inline_frame?"SPACE":"NEWLINE":"TK_END_EXPR"===q&&($.space_before_token=!0,ie="NEWLINE"),"TK_RESERVED"===Y.type&&i(Y.text,G.line_starters)&&")"!==ee.last_text&&(ie=ee.inline_frame||"else"===ee.last_text||"export"===ee.last_text?"SPACE":"NEWLINE"),"TK_RESERVED"===Y.type&&i(Y.text,["else","catch","finally"]))if(("TK_END_BLOCK"!==q||te.mode!==u.BlockStatement||"expand"===_e.brace_style||"end-expand"===_e.brace_style||"none"===_e.brace_style&&Y.wanted_newline)&&!ee.inline_frame)T();else{$.trim(!0);var t=$.current_line;"}"!==t.last()&&T(),$.space_before_token=!0}else"NEWLINE"===ie?"TK_RESERVED"===q&&A(ee.last_text)?$.space_before_token=!0:"TK_END_EXPR"!==q?"TK_START_EXPR"===q&&"TK_RESERVED"===Y.type&&i(Y.text,["var","let","const"])||":"===ee.last_text||("TK_RESERVED"===Y.type&&"if"===Y.text&&"else"===ee.last_text?$.space_before_token=!0:T()):"TK_RESERVED"===Y.type&&i(Y.text,G.line_starters)&&")"!==ee.last_text&&T():ee.multiline_frame&&v(ee.mode)&&","===ee.last_text&&"}"===H?T():"SPACE"===ie&&($.space_before_token=!0);R(),ee.last_word=Y.text,"TK_RESERVED"===Y.type&&("do"===Y.text?ee.do_block=!0:"if"===Y.text?ee.if_block=!0:"import"===Y.text?ee.import_block=!0:ee.import_block&&"TK_RESERVED"===Y.type&&"from"===Y.text&&(ee.import_block=!1))}function B(){S()?$.space_before_token=!1:s(Y);for(var e=D(1);!(ee.mode!==u.Statement||ee.if_block&&e&&"TK_RESERVED"===e.type&&"else"===e.text||ee.do_block);)k();ee.import_block&&(ee.import_block=!1),R()}function M(){S()?$.space_before_token=!0:(s(Y),"TK_RESERVED"===q||"TK_WORD"===q||ee.inline_frame?$.space_before_token=!0:"TK_COMMA"===q||"TK_START_EXPR"===q||"TK_EQUALS"===q||"TK_OPERATOR"===q?O()||E():T()),R()}function j(){S()||s(Y),ee.declaration_statement&&(ee.declaration_assignment=!0),$.space_before_token=!0,R(),$.space_before_token=!0}function I(){s(Y,!0),R(),$.space_before_token=!0,ee.declaration_statement?(w(ee.parent.mode)&&(ee.declaration_assignment=!1),ee.declaration_assignment?(ee.declaration_assignment=!1,T(!1,!0)):_e.comma_first&&E()):ee.mode===u.ObjectLiteral||ee.mode===u.Statement&&ee.parent.mode===u.ObjectLiteral?(ee.mode===u.Statement&&k(),ee.inline_frame||T()):_e.comma_first&&E()}function W(){var e="*"===Y.text&&("TK_RESERVED"===q&&i(ee.last_text,["function","yield"])||i(q,["TK_START_BLOCK","TK_COMMA","TK_END_BLOCK","TK_SEMICOLON"])),t=i(Y.text,["-","+"])&&(i(q,["TK_START_BLOCK","TK_START_EXPR","TK_EQUALS","TK_OPERATOR"])||i(ee.last_text,G.line_starters)||","===ee.last_text);if(S());else{s(Y,!e)}if("TK_RESERVED"===q&&A(ee.last_text))return $.space_before_token=!0,void R();if("*"===Y.text&&"TK_DOT"===q)return void R();if("::"===Y.text)return void R();if("TK_OPERATOR"===q&&i(_e.operator_position,d)&&E(),":"===Y.text&&ee.in_case)return ee.case_body=!0,K(),R(),T(),void(ee.in_case=!1);var n=!0,r=!0,_=!1;if(":"===Y.text?0===ee.ternary_depth?n=!1:(ee.ternary_depth-=1,_=!0):"?"===Y.text&&(ee.ternary_depth+=1),!t&&!e&&_e.preserve_newlines&&i(Y.text,G.positionable_operators)){var a=":"===Y.text,o=a&&_,l=a&&!_;switch(_e.operator_position){case p.before_newline:return $.space_before_token=!l,R(),a&&!o||E(),void($.space_before_token=!0);case p.after_newline:return $.space_before_token=!0,!a||o?D(1).wanted_newline?T(!1,!0):E():$.space_before_token=!1,R(),void($.space_before_token=!0);case p.preserve_newline:return l||E(),n=!($.just_added_newline()||l),$.space_before_token=n,R(),void($.space_before_token=!0)}}if(e){E(),n=!1;var c=D(1);r=c&&i(c.type,["TK_WORD","TK_RESERVED"])}else"..."===Y.text?(E(),n="TK_START_BLOCK"===q,r=!1):(i(Y.text,["--","++","!","~"])||t)&&(n=!1,r=!1,!Y.wanted_newline||"--"!==Y.text&&"++"!==Y.text||T(!1,!0),";"===ee.last_text&&w(ee.mode)&&(n=!0),"TK_RESERVED"===q?n=!0:"TK_END_EXPR"===q?n=!("]"===ee.last_text&&("--"===Y.text||"++"===Y.text)):"TK_OPERATOR"===q&&(n=i(Y.text,["--","-","++","+"])&&i(ee.last_text,["--","-","++","+"]),i(Y.text,["+","-"])&&i(ee.last_text,["--","++"])&&(r=!0)),(ee.mode!==u.BlockStatement||ee.inline_frame)&&ee.mode!==u.Statement||"{"!==ee.last_text&&";"!==ee.last_text||T());$.space_before_token=$.space_before_token||n,R(),$.space_before_token=r}function X(e){if($.raw)return $.add_raw_token(Y),void(Y.directives&&"end"===Y.directives.preserve&&($.raw=_e.test_output_raw));if(Y.directives)return T(!1,e),R(),"start"===Y.directives.preserve&&($.raw=!0),void T(!1,!0);if(!f.newline.test(Y.text)&&!Y.wanted_newline)return $.space_before_token=!0,R(),void($.space_before_token=!0);var t,n=h(Y.text),i=!1,r=!1,a=Y.whitespace_before,o=a.length;for(T(!1,e),n.length>1&&(i=y(n.slice(1),"*"),r=g(n.slice(1),a)),R(n[0]),t=1;t<n.length;t++)T(!1,!0),i?R(" "+_(n[t])):r&&n[t].length>o?R(n[t].substring(o)):$.add_token(n[t]);T(!1,e)}function z(e){Y.wanted_newline?T(!1,e):$.trim(!0),$.space_before_token=!0,R(),T(!1,e)}function F(){S()||s(Y,!0),"TK_RESERVED"===q&&A(ee.last_text)?$.space_before_token=!0:E(")"===ee.last_text&&_e.break_chained_methods),R()}function U(e){R(),"\n"===Y.text[Y.text.length-1]&&T(!1,e)}function Q(){for(;ee.mode===u.Statement;)k();s(Y)}var $,Z,G,Y,q,H,J,ee,te,ne,ie,re,_e,ae=[],oe="";re={TK_START_EXPR:C,TK_END_EXPR:N,TK_START_BLOCK:L,TK_END_BLOCK:V,TK_WORD:P,TK_RESERVED:P,TK_SEMICOLON:B,TK_STRING:M,TK_EQUALS:j,TK_OPERATOR:W,TK_COMMA:I,TK_BLOCK_COMMENT:X,TK_COMMENT:z,TK_DOT:F,TK_UNKNOWN:U,TK_EOF:Q},n=n||{},n=e(n,"js"),_e={},"expand-strict"===n.brace_style?n.brace_style="expand":"collapse-preserve-inline"===n.brace_style?n.brace_style="collapse,preserve-inline":void 0!==n.braces_on_own_line?n.brace_style=n.braces_on_own_line?"expand":"collapse":n.brace_style||(n.brace_style="collapse");var se=n.brace_style.split(/[^a-zA-Z0-9_\-]+/);for(_e.brace_style=se[0],_e.brace_preserve_inline=!!se[1]&&se[1],_e.indent_size=n.indent_size?parseInt(n.indent_size,10):4,_e.indent_char=n.indent_char?n.indent_char:" ",_e.eol=n.eol?n.eol:"auto",_e.preserve_newlines=void 0===n.preserve_newlines||n.preserve_newlines,_e.break_chained_methods=void 0!==n.break_chained_methods&&n.break_chained_methods,_e.max_preserve_newlines=void 0===n.max_preserve_newlines?0:parseInt(n.max_preserve_newlines,10),_e.space_in_paren=void 0!==n.space_in_paren&&n.space_in_paren,_e.space_in_empty_paren=void 0!==n.space_in_empty_paren&&n.space_in_empty_paren,_e.jslint_happy=void 0!==n.jslint_happy&&n.jslint_happy,_e.space_after_anon_function=void 0!==n.space_after_anon_function&&n.space_after_anon_function,_e.keep_array_indentation=void 0!==n.keep_array_indentation&&n.keep_array_indentation,_e.space_before_conditional=void 0===n.space_before_conditional||n.space_before_conditional,_e.unescape_strings=void 0!==n.unescape_strings&&n.unescape_strings,_e.wrap_line_length=void 0===n.wrap_line_length?0:parseInt(n.wrap_line_length,10),_e.e4x=void 0!==n.e4x&&n.e4x,_e.end_with_newline=void 0!==n.end_with_newline&&n.end_with_newline,_e.comma_first=void 0!==n.comma_first&&n.comma_first,_e.operator_position=a(n.operator_position),_e.test_output_raw=void 0!==n.test_output_raw&&n.test_output_raw,_e.jslint_happy&&(_e.space_after_anon_function=!0),n.indent_with_tabs&&(_e.indent_char="\t",_e.indent_size=1),"auto"===_e.eol&&(_e.eol="\n",t&&f.lineBreak.test(t||"")&&(_e.eol=t.match(f.lineBreak)[0])),_e.eol=_e.eol.replace(/\\r/,"\r").replace(/\\n/,"\n"),J="";_e.indent_size>0;)J+=_e.indent_char,_e.indent_size-=1;var le=0;if(t&&t.length){for(;" "===t.charAt(le)||"\t"===t.charAt(le);)oe+=t.charAt(le),le+=1;t=t.substring(le)}q="TK_START_BLOCK",H="",$=new l(J,oe),$.raw=_e.test_output_raw,ne=[],b(u.BlockStatement),this.beautify=function(){var e;for(G=new c(t,_e,J),ae=G.tokenize(),Z=0,Y=D();Y;)re[Y.type](),H=ee.last_text,q=Y.type,ee.last_text=Y.text,Z+=1,Y=D();return e=$.get_code(),_e.end_with_newline&&(e+="\n"),"\n"!==_e.eol&&(e=e.replace(/[\n]/g,_e.eol)),e};var ce=["break","continue","return","throw"]}function s(e){var t=0,n=-1,i=[],r=!0;this.set_indent=function(i){t=e.baseIndentLength+i*e.indent_length,n=i},this.get_character_count=function(){return t},this.is_empty=function(){return r},this.last=function(){return this._empty?null:i[i.length-1]},this.push=function(e){i.push(e),t+=e.length,r=!1},this.pop=function(){var e=null;return r||(e=i.pop(),t-=e.length,r=0===i.length),e},this.remove_indent=function(){n>0&&(n-=1,t-=e.indent_length)},this.trim=function(){for(;" "===this.last();)i.pop(),t-=1;r=0===i.length},this.toString=function(){var t="";return this._empty||(n>=0&&(t=e.indent_cache[n]),t+=i.join("")),t}}function l(e,t){t=t||"",this.indent_cache=[t],this.baseIndentLength=t.length,this.indent_length=e.length,this.raw=!1;var n=[];this.baseIndentString=t,this.indent_string=e,this.previous_line=null,this.current_line=null,this.space_before_token=!1,this.add_outputline=function(){this.previous_line=this.current_line,this.current_line=new s(this),n.push(this.current_line)},this.add_outputline(),this.get_line_number=function(){return n.length},this.add_new_line=function(e){return(1!==this.get_line_number()||!this.just_added_newline())&&(!(!e&&this.just_added_newline())&&(this.raw||this.add_outputline(),!0))},this.get_code=function(){return n.join("\n").replace(/[\r\n\t ]+$/,"")},this.set_indent=function(e){if(n.length>1){for(;e>=this.indent_cache.length;)this.indent_cache.push(this.indent_cache[this.indent_cache.length-1]+this.indent_string);return this.current_line.set_indent(e),!0}return this.current_line.set_indent(0),!1},this.add_raw_token=function(e){for(var t=0;t<e.newlines;t++)this.add_outputline();this.current_line.push(e.whitespace_before),this.current_line.push(e.text),this.space_before_token=!1},this.add_token=function(e){this.add_space_before_token(),this.current_line.push(e)},this.add_space_before_token=function(){this.space_before_token&&!this.just_added_newline()&&this.current_line.push(" "),this.space_before_token=!1},this.remove_redundant_indentation=function(e){if(!e.multiline_frame&&e.mode!==u.ForInitializer&&e.mode!==u.Conditional)for(var t=e.start_line_index,i=n.length;t<i;)n[t].remove_indent(),t++},this.trim=function(i){for(i=void 0!==i&&i,this.current_line.trim(e,t);i&&n.length>1&&this.current_line.is_empty();)n.pop(),this.current_line=n[n.length-1],this.current_line.trim();this.previous_line=n.length>1?n[n.length-2]:null},this.just_added_newline=function(){return this.current_line.is_empty()},this.just_added_blankline=function(){if(this.just_added_newline()){if(1===n.length)return!0;return n[n.length-2].is_empty()}return!1}}function c(e,t){function n(e){if(!e.match(w))return null;var t={};k.lastIndex=0;for(var n=k.exec(e);n;)t[n[1]]=n[2],n=k.exec(e);return t}function _(){var e,_=[];u=0,T="";var h=K.next();if(null===h)return["","TK_EOF"];var w;for(w=R.length?R[R.length-1]:new E("TK_START_BLOCK","{");i(h,o);)if(f.newline.test(h)?"\n"===h&&"\r"===K.peek(-2)||(u+=1,_=[]):_.push(h),null===(h=K.next()))return["","TK_EOF"];if(_.length&&(T=_.join("")),s.test(h)||"."===h&&K.testChar(s)){var k=!0,y=!0,g=s;for("0"===h&&K.testChar(/[XxOoBb]/)?(k=!1,y=!1,g=K.testChar(/[Bb]/)?l:K.testChar(/[Oo]/)?c:p,h+=K.next()):"."===h?k=!1:(h="",K.back());K.testChar(g);)h+=K.next(),k&&"."===K.peek()&&(h+=K.next(),k=!1),y&&K.testChar(/[Ee]/)&&(h+=K.next(),K.testChar(/[+-]/)&&(h+=K.next()),y=!1,k=!1);return[h,"TK_WORD"]}if(f.isIdentifierStart(K.peekCharCode(-1))){if(K.hasNext())for(;f.isIdentifierChar(K.peekCharCode())&&(h+=K.next(),K.hasNext()););return"TK_DOT"===w.type||"TK_RESERVED"===w.type&&i(w.text,["set","get"])||!i(h,m)?[h,"TK_WORD"]:"in"===h||"of"===h?[h,"TK_OPERATOR"]:[h,"TK_RESERVED"]}if("("===h||"["===h)return[h,"TK_START_EXPR"];if(")"===h||"]"===h)return[h,"TK_END_EXPR"];if("{"===h)return[h,"TK_START_BLOCK"];if("}"===h)return[h,"TK_END_BLOCK"];if(";"===h)return[h,"TK_SEMICOLON"];if("/"===h){var A,D="";if("*"===K.peek()){K.next(),A=K.match(b),D="/*"+A[0];var C=n(D);return C&&"start"===C.ignore&&(A=K.match(O),D+=A[0]),D=D.replace(f.allLineBreaks,"\n"),[D,"TK_BLOCK_COMMENT",C]}if("/"===K.peek())return K.next(),A=K.match(v),D="//"+A[0],[D,"TK_COMMENT"]}var N=/<()([-a-zA-Z:0-9_.]+|{[\s\S]+?}|!\[CDATA\[[\s\S]*?\]\])(\s+{[\s\S]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{[\s\S]+?}))*\s*(\/?)\s*>/g;if("`"===h||"'"===h||'"'===h||("/"===h||t.e4x&&"<"===h&&K.test(N,-1))&&("TK_RESERVED"===w.type&&i(w.text,["return","case","throw","else","do","typeof","yield"])||"TK_END_EXPR"===w.type&&")"===w.text&&w.parent&&"TK_RESERVED"===w.parent.type&&i(w.parent.text,["if","while","for"])||i(w.type,["TK_COMMENT","TK_START_EXPR","TK_START_BLOCK","TK_END_BLOCK","TK_OPERATOR","TK_EQUALS","TK_EOF","TK_SEMICOLON","TK_COMMA"]))){var L=h,V=!1,P=!1;if(e=h,"/"===L)for(var B=!1;K.hasNext()&&(V||B||K.peek()!==L)&&!K.testChar(f.newline);)e+=K.peek(),V?V=!1:(V="\\"===K.peek(),"["===K.peek()?B=!0:"]"===K.peek()&&(B=!1)),K.next();else if(t.e4x&&"<"===L){var M=/[\s\S]*?<(\/?)([-a-zA-Z:0-9_.]+|{[\s\S]+?}|!\[CDATA\[[\s\S]*?\]\])(\s+{[\s\S]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{[\s\S]+?}))*\s*(\/?)\s*>/g;K.back();var j="",I=K.match(N);if(I){for(var W=I[2].replace(/^{\s+/,"{").replace(/\s+}$/,"}"),X=0===W.indexOf("{"),z=0;I;){var F=!!I[1],U=I[2],Q=!!I[I.length-1]||"![CDATA["===U.slice(0,8);if(!Q&&(U===W||X&&U.replace(/^{\s+/,"{").replace(/\s+}$/,"}"))&&(F?--z:++z),j+=I[0],z<=0)break;I=K.match(M)}return I||(j+=K.match(/[\s\S]*/g)[0]),j=j.replace(f.allLineBreaks,"\n"),[j,"TK_STRING"]}}else{var $=function(t,n,i){for(var r;K.hasNext()&&(r=K.peek(),V||r!==t&&(n||!f.newline.test(r)));)(V||n)&&f.newline.test(r)?("\r"===r&&"\n"===K.peek(1)&&(K.next(),r=K.peek()),e+="\n"):e+=r,V?("x"!==r&&"u"!==r||(P=!0),V=!1):V="\\"===r,K.next(),i&&-1!==e.indexOf(i,e.length-i.length)&&("`"===t?$("}",n,"`"):$("`",n,"${"),K.hasNext()&&(e+=K.next()))};"`"===L?$("`",!0,"${"):$(L)}if(P&&t.unescape_strings&&(e=a(e)),K.peek()===L&&(e+=L,K.next(),"/"===L))for(;K.hasNext()&&f.isIdentifierStart(K.peekCharCode());)e+=K.next();return[e,"TK_STRING"]}if("#"===h){if(0===R.length&&"!"===K.peek()){for(e=h;K.hasNext()&&"\n"!==h;)h=K.next(),e+=h;return[r(e)+"\n","TK_UNKNOWN"]}var Z="#";if(K.hasNext()&&K.testChar(s)){do{h=K.next(),Z+=h}while(K.hasNext()&&"#"!==h&&"="!==h);return"#"===h||("["===K.peek()&&"]"===K.peek(1)?(Z+="[]",K.next(),K.next()):"{"===K.peek()&&"}"===K.peek(1)&&(Z+="{}",K.next(),K.next())),[Z,"TK_WORD"]}}if("<"===h&&("?"===K.peek()||"%"===K.peek())){K.back();var G=K.match(S);if(G)return h=G[0],h=h.replace(f.allLineBreaks,"\n"),[h,"TK_STRING"]}if("<"===h&&K.match(/\!--/g)){for(h="\x3c!--";K.hasNext()&&!K.testChar(f.newline);)h+=K.next();return x=!0,[h,"TK_COMMENT"]}if("-"===h&&x&&K.match(/->/g))return x=!1,["--\x3e","TK_COMMENT"];if("."===h)return"."===K.peek()&&"."===K.peek(1)?(h+=K.next()+K.next(),[h,"TK_OPERATOR"]):[h,"TK_DOT"];if(i(h,d)){for(;K.hasNext()&&i(h+K.peek(),d)&&(h+=K.next(),K.hasNext()););return","===h?[h,"TK_COMMA"]:"="===h?[h,"TK_EQUALS"]:[h,"TK_OPERATOR"]}return[h,"TK_UNKNOWN"]}function a(e){for(var t="",n=0,i=new h(e),r=null;i.hasNext();)if(r=i.match(/([\s]|[^\\]|\\\\)+/g),r&&(t+=r[0]),"\\"===i.peek()){if(i.next(),"x"===i.peek())r=i.match(/x([0-9A-Fa-f]{2})/g);else{if("u"!==i.peek()){t+="\\",i.hasNext()&&(t+=i.next());continue}r=i.match(/u([0-9A-Fa-f]{4})/g)}if(!r)return e;if((n=parseInt(r[1],16))>126&&n<=255&&0===r[0].indexOf("x"))return e;if(n>=0&&n<32){t+="\\"+r[0];continue}t+=34===n||39===n||92===n?"\\"+String.fromCharCode(n):String.fromCharCode(n)}return t}var o="\n\r\t ".split(""),s=/[0-9]/,l=/[01]/,c=/[01234567]/,p=/[0123456789abcdefABCDEF]/;this.positionable_operators="!= !== % & && * ** + - / : < << <= == === > >= >> >>> ? ^ | ||".split(" ");var d=this.positionable_operators.concat("! %= &= *= **= ++ += , -- -= /= :: <<= = => >>= >>>= ^= |= ~ ...".split(" "));this.line_starters="continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export".split(",");var u,T,x,R,K,m=this.line_starters.concat(["do","in","of","else","get","set","new","catch","finally","typeof","yield","async","await","from","as"]),b=/([\s\S]*?)((?:\*\/)|$)/g,v=/([^\n\r\u2028\u2029]*)/g,w=/\/\* beautify( \w+[:]\w+)+ \*\//g,k=/ (\w+)[:](\w+)/g,O=/([\s\S]*?)((?:\/\*\sbeautify\signore:end\s\*\/)|$)/g,S=/((<\?php|<\?=)[\s\S]*?\?>)|(<%[\s\S]*?%>)/g;this.tokenize=function(){K=new h(e),x=!1,R=[];for(var t,n,i,r=null,a=[],o=[];!n||"TK_EOF"!==n.type;){for(i=_(),t=new E(i[1],i[0],u,T);"TK_COMMENT"===t.type||"TK_BLOCK_COMMENT"===t.type||"TK_UNKNOWN"===t.type;)"TK_BLOCK_COMMENT"===t.type&&(t.directives=i[2]),o.push(t),i=_(),t=new E(i[1],i[0],u,T);o.length&&(t.comments_before=o,o=[]),"TK_START_BLOCK"===t.type||"TK_START_EXPR"===t.type?(t.parent=n,a.push(r),r=t):("TK_END_BLOCK"===t.type||"TK_END_EXPR"===t.type)&&r&&("]"===t.text&&"["===r.text||")"===t.text&&"("===r.text||"}"===t.text&&"{"===r.text)&&(t.parent=r.parent,t.opened=r,r=a.pop()),R.push(t),n=t}return R}}var f={};!function(e){var t="ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",n=new RegExp("["+t+"]"),i=new RegExp("["+t+"̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ؚؠ-ىٲ-ۓۧ-ۨۻ-ۼܰ-݊ࠀ-ࠔࠛ-ࠣࠥ-ࠧࠩ-࠭ࡀ-ࡗࣤ-ࣾऀ-ःऺ-़ा-ॏ॑-ॗॢ-ॣ०-९ঁ-ঃ়া-ৄেৈৗয়-ৠਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢ-ૣ૦-૯ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୟ-ୠ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఁ-ఃె-ైొ-్ౕౖౢ-ౣ౦-౯ಂಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢ-ೣ೦-೯ംഃെ-ൈൗൢ-ൣ൦-൯ංඃ්ා-ුූෘ-ෟෲෳิ-ฺเ-ๅ๐-๙ິ-ູ່-ໍ໐-໙༘༙༠-༩༹༵༷ཁ-ཇཱ-྄྆-྇ྍ-ྗྙ-ྼ࿆က-ဩ၀-၉ၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟ᜎ-ᜐᜠ-ᜰᝀ-ᝐᝲᝳក-ឲ៝០-៩᠋-᠍᠐-᠙ᤠ-ᤫᤰ-᤻ᥑ-ᥭᦰ-ᧀᧈ-ᧉ᧐-᧙ᨀ-ᨕᨠ-ᩓ᩠-᩿᩼-᪉᪐-᪙ᭆ-ᭋ᭐-᭙᭫-᭳᮰-᮹᯦-᯳ᰀ-ᰢ᱀-᱉ᱛ-ᱽ᳐-᳒ᴀ-ᶾḁ-ἕ‌‍‿⁀⁔⃐-⃥⃜⃡-⃰ⶁ-ⶖⷠ-ⷿ〡-〨゙゚Ꙁ-ꙭꙴ-꙽ꚟ꛰-꛱ꟸ-ꠀ꠆ꠋꠣ-ꠧꢀ-ꢁꢴ-꣄꣐-꣙ꣳ-ꣷ꤀-꤉ꤦ-꤭ꤰ-ꥅꦀ-ꦃ꦳-꧀ꨀ-ꨧꩀ-ꩁꩌ-ꩍ꩐-꩙ꩻꫠ-ꫩꫲ-ꫳꯀ-ꯡ꯬꯭꯰-꯹ﬠ-ﬨ︀-️︠-︦︳︴﹍-﹏０-９＿]");e.newline=/[\n\r\u2028\u2029]/,e.lineBreak=new RegExp("\r\n|"+e.newline.source),e.allLineBreaks=new RegExp(e.lineBreak.source,"g"),e.isIdentifierStart=function(e){return e<65?36===e||64===e:e<91||(e<97?95===e:e<123||e>=170&&n.test(String.fromCharCode(e)))},e.isIdentifierChar=function(e){return e<48?36===e:e<58||!(e<65)&&(e<91||(e<97?95===e:e<123||e>=170&&i.test(String.fromCharCode(e))))}}(f);var p={before_newline:"before-newline",after_newline:"after-newline",preserve_newline:"preserve-newline"},d=[p.before_newline,p.preserve_newline],u={BlockStatement:"BlockStatement",Statement:"Statement",ObjectLiteral:"ObjectLiteral",ArrayLiteral:"ArrayLiteral",ForInitializer:"ForInitializer",Conditional:"Conditional",Expression:"Expression"},h=function(e){var t=e,n=t.length,i=0;this.back=function(){i-=1},this.hasNext=function(){return i<n},this.next=function(){var e=null;return this.hasNext()&&(e=t.charAt(i),i+=1),e},this.peek=function(e){var r=null;return e=e||0,e+=i,e>=0&&e<n&&(r=t.charAt(e)),r},this.peekCharCode=function(e){var r=0;return e=e||0,e+=i,e>=0&&e<n&&(r=t.charCodeAt(e)),r},this.test=function(e,n){return n=n||0,e.lastIndex=i+n,e.test(t)},this.testChar=function(e,t){var n=this.peek(t);return null!==n&&e.test(n)},this.match=function(e){e.lastIndex=i;var n=e.exec(t);return n&&n.index===i?i+=n[0].length:n=null,n}},E=function(e,t,n,i,r){this.type=e,this.text=t,this.comments_before=[],this.comments_after=[],this.newlines=n||0,this.wanted_newline=n>0,this.whitespace_before=i||"",this.parent=r||null,this.opened=null,this.directives=null};return new o(t,n).beautify()}"function"==typeof define&&define.amd?define([],function(){return{js_beautify:t}}):"undefined"!=typeof exports?exports.js_beautify=t:"undefined"!=typeof window?window.js_beautify=t:"undefined"!=typeof global&&(global.js_beautify=t)}();