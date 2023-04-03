// Generated from HIPML.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';
import HIPMLListener from './HIPMLListener.js';
const serializedATN = [4,1,62,494,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,1,0,4,0,82,8,0,11,0,
12,0,83,1,1,1,1,1,1,3,1,89,8,1,1,2,1,2,1,2,1,2,1,3,4,3,96,8,3,11,3,12,3,
97,1,4,1,4,1,4,3,4,103,8,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,
7,3,7,117,8,7,1,8,1,8,1,8,1,8,1,9,4,9,124,8,9,11,9,12,9,125,1,10,1,10,1,
10,5,10,131,8,10,10,10,12,10,134,9,10,1,10,1,10,3,10,138,8,10,1,11,1,11,
1,11,3,11,143,8,11,1,12,4,12,146,8,12,11,12,12,12,147,1,12,1,12,1,12,4,12,
153,8,12,11,12,12,12,154,1,12,3,12,158,8,12,1,13,1,13,1,13,1,13,3,13,164,
8,13,1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,16,4,16,175,8,16,11,16,12,
16,176,1,17,1,17,1,17,5,17,182,8,17,10,17,12,17,185,9,17,1,17,1,17,3,17,
189,8,17,1,18,1,18,1,18,1,18,1,19,1,19,4,19,197,8,19,11,19,12,19,198,1,19,
1,19,1,20,1,20,1,20,3,20,206,8,20,1,20,1,20,1,20,1,21,1,21,1,21,3,21,214,
8,21,1,21,1,21,1,22,1,22,1,22,4,22,221,8,22,11,22,12,22,222,1,22,1,22,4,
22,227,8,22,11,22,12,22,228,1,22,1,22,4,22,233,8,22,11,22,12,22,234,1,22,
1,22,4,22,239,8,22,11,22,12,22,240,1,22,1,22,1,22,1,22,1,22,1,22,3,22,249,
8,22,1,22,1,22,1,22,1,22,1,22,1,22,5,22,257,8,22,10,22,12,22,260,9,22,1,
23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,
1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,3,
24,291,8,24,1,24,1,24,1,24,3,24,296,8,24,1,24,1,24,3,24,300,8,24,1,24,1,
24,1,24,3,24,305,8,24,3,24,307,8,24,1,25,1,25,1,25,1,25,5,25,313,8,25,10,
25,12,25,316,9,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,5,25,325,8,25,10,25,
12,25,328,9,25,1,25,1,25,1,25,3,25,333,8,25,1,26,1,26,1,26,1,26,1,26,1,26,
1,26,1,26,1,26,1,26,3,26,345,8,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,
1,26,1,26,1,26,1,26,1,26,1,26,1,26,5,26,362,8,26,10,26,12,26,365,9,26,1,
27,1,27,3,27,369,8,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,3,27,
380,8,27,1,28,1,28,1,28,1,28,1,29,1,29,1,29,5,29,389,8,29,10,29,12,29,392,
9,29,1,29,1,29,1,29,5,29,397,8,29,10,29,12,29,400,9,29,1,29,1,29,1,29,5,
29,405,8,29,10,29,12,29,408,9,29,1,29,1,29,1,29,5,29,413,8,29,10,29,12,29,
416,9,29,1,29,1,29,1,29,5,29,421,8,29,10,29,12,29,424,9,29,1,29,1,29,1,29,
5,29,429,8,29,10,29,12,29,432,9,29,1,29,1,29,1,29,5,29,437,8,29,10,29,12,
29,440,9,29,3,29,442,8,29,1,30,1,30,1,30,3,30,447,8,30,1,30,1,30,1,30,3,
30,452,8,30,1,30,1,30,1,30,3,30,457,8,30,1,30,1,30,1,30,3,30,462,8,30,1,
30,1,30,1,30,3,30,467,8,30,1,30,1,30,1,30,3,30,472,8,30,3,30,474,8,30,1,
31,1,31,1,32,1,32,1,33,1,33,1,34,1,34,1,35,1,35,1,36,1,36,1,37,1,37,1,38,
1,38,1,39,1,39,1,39,0,2,44,52,40,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,
30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,
78,0,3,2,0,48,48,50,50,2,0,49,49,51,51,1,0,35,36,541,0,81,1,0,0,0,2,88,1,
0,0,0,4,90,1,0,0,0,6,95,1,0,0,0,8,102,1,0,0,0,10,104,1,0,0,0,12,108,1,0,
0,0,14,112,1,0,0,0,16,118,1,0,0,0,18,123,1,0,0,0,20,127,1,0,0,0,22,142,1,
0,0,0,24,157,1,0,0,0,26,159,1,0,0,0,28,165,1,0,0,0,30,169,1,0,0,0,32,174,
1,0,0,0,34,178,1,0,0,0,36,190,1,0,0,0,38,194,1,0,0,0,40,202,1,0,0,0,42,210,
1,0,0,0,44,248,1,0,0,0,46,261,1,0,0,0,48,306,1,0,0,0,50,332,1,0,0,0,52,344,
1,0,0,0,54,368,1,0,0,0,56,381,1,0,0,0,58,441,1,0,0,0,60,473,1,0,0,0,62,475,
1,0,0,0,64,477,1,0,0,0,66,479,1,0,0,0,68,481,1,0,0,0,70,483,1,0,0,0,72,485,
1,0,0,0,74,487,1,0,0,0,76,489,1,0,0,0,78,491,1,0,0,0,80,82,3,2,1,0,81,80,
1,0,0,0,82,83,1,0,0,0,83,81,1,0,0,0,83,84,1,0,0,0,84,1,1,0,0,0,85,89,3,4,
2,0,86,89,3,16,8,0,87,89,3,30,15,0,88,85,1,0,0,0,88,86,1,0,0,0,88,87,1,0,
0,0,89,3,1,0,0,0,90,91,5,8,0,0,91,92,5,1,0,0,92,93,3,6,3,0,93,5,1,0,0,0,
94,96,3,8,4,0,95,94,1,0,0,0,96,97,1,0,0,0,97,95,1,0,0,0,97,98,1,0,0,0,98,
7,1,0,0,0,99,103,3,10,5,0,100,103,3,12,6,0,101,103,3,14,7,0,102,99,1,0,0,
0,102,100,1,0,0,0,102,101,1,0,0,0,103,9,1,0,0,0,104,105,5,14,0,0,105,106,
5,1,0,0,106,107,3,76,38,0,107,11,1,0,0,0,108,109,5,15,0,0,109,110,5,1,0,
0,110,111,3,72,36,0,111,13,1,0,0,0,112,113,5,16,0,0,113,116,5,1,0,0,114,
117,3,52,26,0,115,117,3,38,19,0,116,114,1,0,0,0,116,115,1,0,0,0,117,15,1,
0,0,0,118,119,5,9,0,0,119,120,5,1,0,0,120,121,3,18,9,0,121,17,1,0,0,0,122,
124,3,20,10,0,123,122,1,0,0,0,124,125,1,0,0,0,125,123,1,0,0,0,125,126,1,
0,0,0,126,19,1,0,0,0,127,132,3,22,11,0,128,129,5,2,0,0,129,131,3,22,11,0,
130,128,1,0,0,0,131,134,1,0,0,0,132,130,1,0,0,0,132,133,1,0,0,0,133,137,
1,0,0,0,134,132,1,0,0,0,135,136,5,1,0,0,136,138,3,24,12,0,137,135,1,0,0,
0,137,138,1,0,0,0,138,21,1,0,0,0,139,143,3,66,33,0,140,143,3,64,32,0,141,
143,3,68,34,0,142,139,1,0,0,0,142,140,1,0,0,0,142,141,1,0,0,0,143,23,1,0,
0,0,144,146,3,26,13,0,145,144,1,0,0,0,146,147,1,0,0,0,147,145,1,0,0,0,147,
148,1,0,0,0,148,149,1,0,0,0,149,150,3,28,14,0,150,158,1,0,0,0,151,153,3,
26,13,0,152,151,1,0,0,0,153,154,1,0,0,0,154,152,1,0,0,0,154,155,1,0,0,0,
155,158,1,0,0,0,156,158,3,28,14,0,157,145,1,0,0,0,157,152,1,0,0,0,157,156,
1,0,0,0,158,25,1,0,0,0,159,160,5,17,0,0,160,163,5,1,0,0,161,164,3,52,26,
0,162,164,3,38,19,0,163,161,1,0,0,0,163,162,1,0,0,0,164,27,1,0,0,0,165,166,
5,18,0,0,166,167,5,1,0,0,167,168,3,44,22,0,168,29,1,0,0,0,169,170,5,10,0,
0,170,171,5,1,0,0,171,172,3,32,16,0,172,31,1,0,0,0,173,175,3,34,17,0,174,
173,1,0,0,0,175,176,1,0,0,0,176,174,1,0,0,0,176,177,1,0,0,0,177,33,1,0,0,
0,178,183,3,22,11,0,179,180,5,2,0,0,180,182,3,22,11,0,181,179,1,0,0,0,182,
185,1,0,0,0,183,181,1,0,0,0,183,184,1,0,0,0,184,188,1,0,0,0,185,183,1,0,
0,0,186,187,5,1,0,0,187,189,3,36,18,0,188,186,1,0,0,0,188,189,1,0,0,0,189,
35,1,0,0,0,190,191,5,19,0,0,191,192,5,1,0,0,192,193,3,44,22,0,193,37,1,0,
0,0,194,196,5,25,0,0,195,197,3,40,20,0,196,195,1,0,0,0,197,198,1,0,0,0,198,
196,1,0,0,0,198,199,1,0,0,0,199,200,1,0,0,0,200,201,3,42,21,0,201,39,1,0,
0,0,202,205,5,26,0,0,203,206,3,52,26,0,204,206,3,76,38,0,205,203,1,0,0,0,
205,204,1,0,0,0,206,207,1,0,0,0,207,208,5,32,0,0,208,209,3,44,22,0,209,41,
1,0,0,0,210,213,5,26,0,0,211,214,3,52,26,0,212,214,3,76,38,0,213,211,1,0,
0,0,213,212,1,0,0,0,214,215,1,0,0,0,215,216,5,27,0,0,216,43,1,0,0,0,217,
218,6,22,-1,0,218,220,5,28,0,0,219,221,3,46,23,0,220,219,1,0,0,0,221,222,
1,0,0,0,222,220,1,0,0,0,222,223,1,0,0,0,223,249,1,0,0,0,224,226,5,29,0,0,
225,227,3,46,23,0,226,225,1,0,0,0,227,228,1,0,0,0,228,226,1,0,0,0,228,229,
1,0,0,0,229,249,1,0,0,0,230,232,5,30,0,0,231,233,3,46,23,0,232,231,1,0,0,
0,233,234,1,0,0,0,234,232,1,0,0,0,234,235,1,0,0,0,235,249,1,0,0,0,236,238,
5,31,0,0,237,239,3,46,23,0,238,237,1,0,0,0,239,240,1,0,0,0,240,238,1,0,0,
0,240,241,1,0,0,0,241,249,1,0,0,0,242,249,3,48,24,0,243,249,3,54,27,0,244,
245,5,3,0,0,245,246,3,44,22,0,246,247,5,4,0,0,247,249,1,0,0,0,248,217,1,
0,0,0,248,224,1,0,0,0,248,230,1,0,0,0,248,236,1,0,0,0,248,242,1,0,0,0,248,
243,1,0,0,0,248,244,1,0,0,0,249,258,1,0,0,0,250,251,10,5,0,0,251,252,5,33,
0,0,252,257,3,44,22,6,253,254,10,4,0,0,254,255,5,34,0,0,255,257,3,44,22,
5,256,250,1,0,0,0,256,253,1,0,0,0,257,260,1,0,0,0,258,256,1,0,0,0,258,259,
1,0,0,0,259,45,1,0,0,0,260,258,1,0,0,0,261,262,5,26,0,0,262,263,3,44,22,
0,263,47,1,0,0,0,264,265,3,52,26,0,265,266,5,42,0,0,266,267,3,52,26,0,267,
307,1,0,0,0,268,269,3,52,26,0,269,270,5,43,0,0,270,271,3,52,26,0,271,307,
1,0,0,0,272,273,3,52,26,0,273,274,5,44,0,0,274,275,3,52,26,0,275,307,1,0,
0,0,276,277,3,52,26,0,277,278,5,45,0,0,278,279,3,52,26,0,279,307,1,0,0,0,
280,281,3,52,26,0,281,282,5,47,0,0,282,283,3,52,26,0,283,307,1,0,0,0,284,
285,3,52,26,0,285,286,5,46,0,0,286,287,3,52,26,0,287,307,1,0,0,0,288,291,
3,62,31,0,289,291,3,76,38,0,290,288,1,0,0,0,290,289,1,0,0,0,291,292,1,0,
0,0,292,295,5,47,0,0,293,296,3,62,31,0,294,296,3,76,38,0,295,293,1,0,0,0,
295,294,1,0,0,0,296,307,1,0,0,0,297,300,3,62,31,0,298,300,3,76,38,0,299,
297,1,0,0,0,299,298,1,0,0,0,300,301,1,0,0,0,301,304,5,46,0,0,302,305,3,62,
31,0,303,305,3,76,38,0,304,302,1,0,0,0,304,303,1,0,0,0,305,307,1,0,0,0,306,
264,1,0,0,0,306,268,1,0,0,0,306,272,1,0,0,0,306,276,1,0,0,0,306,280,1,0,
0,0,306,284,1,0,0,0,306,290,1,0,0,0,306,299,1,0,0,0,307,49,1,0,0,0,308,309,
7,0,0,0,309,314,3,52,26,0,310,311,5,2,0,0,311,313,3,52,26,0,312,310,1,0,
0,0,313,316,1,0,0,0,314,312,1,0,0,0,314,315,1,0,0,0,315,317,1,0,0,0,316,
314,1,0,0,0,317,318,5,33,0,0,318,319,3,52,26,0,319,333,1,0,0,0,320,321,7,
1,0,0,321,326,3,52,26,0,322,323,5,2,0,0,323,325,3,52,26,0,324,322,1,0,0,
0,325,328,1,0,0,0,326,324,1,0,0,0,326,327,1,0,0,0,327,329,1,0,0,0,328,326,
1,0,0,0,329,330,5,33,0,0,330,331,3,52,26,0,331,333,1,0,0,0,332,308,1,0,0,
0,332,320,1,0,0,0,333,51,1,0,0,0,334,335,6,26,-1,0,335,345,3,60,30,0,336,
345,3,50,25,0,337,345,3,62,31,0,338,345,3,70,35,0,339,345,3,74,37,0,340,
341,5,3,0,0,341,342,3,52,26,0,342,343,5,4,0,0,343,345,1,0,0,0,344,334,1,
0,0,0,344,336,1,0,0,0,344,337,1,0,0,0,344,338,1,0,0,0,344,339,1,0,0,0,344,
340,1,0,0,0,345,363,1,0,0,0,346,347,10,11,0,0,347,348,5,39,0,0,348,362,3,
52,26,12,349,350,10,10,0,0,350,351,5,40,0,0,351,362,3,52,26,11,352,353,10,
9,0,0,353,354,5,41,0,0,354,362,3,52,26,10,355,356,10,8,0,0,356,357,5,37,
0,0,357,362,3,52,26,9,358,359,10,7,0,0,359,360,5,38,0,0,360,362,3,52,26,
8,361,346,1,0,0,0,361,349,1,0,0,0,361,352,1,0,0,0,361,355,1,0,0,0,361,358,
1,0,0,0,362,365,1,0,0,0,363,361,1,0,0,0,363,364,1,0,0,0,364,53,1,0,0,0,365,
363,1,0,0,0,366,369,3,56,28,0,367,369,3,62,31,0,368,366,1,0,0,0,368,367,
1,0,0,0,369,370,1,0,0,0,370,379,7,2,0,0,371,380,3,74,37,0,372,380,3,70,35,
0,373,380,3,62,31,0,374,380,3,72,36,0,375,380,3,76,38,0,376,380,3,66,33,
0,377,380,3,64,32,0,378,380,3,68,34,0,379,371,1,0,0,0,379,372,1,0,0,0,379,
373,1,0,0,0,379,374,1,0,0,0,379,375,1,0,0,0,379,376,1,0,0,0,379,377,1,0,
0,0,379,378,1,0,0,0,380,55,1,0,0,0,381,382,5,5,0,0,382,383,3,58,29,0,383,
384,5,6,0,0,384,57,1,0,0,0,385,390,3,70,35,0,386,387,5,2,0,0,387,389,3,70,
35,0,388,386,1,0,0,0,389,392,1,0,0,0,390,388,1,0,0,0,390,391,1,0,0,0,391,
442,1,0,0,0,392,390,1,0,0,0,393,398,3,62,31,0,394,395,5,2,0,0,395,397,3,
62,31,0,396,394,1,0,0,0,397,400,1,0,0,0,398,396,1,0,0,0,398,399,1,0,0,0,
399,442,1,0,0,0,400,398,1,0,0,0,401,406,3,72,36,0,402,403,5,2,0,0,403,405,
3,72,36,0,404,402,1,0,0,0,405,408,1,0,0,0,406,404,1,0,0,0,406,407,1,0,0,
0,407,442,1,0,0,0,408,406,1,0,0,0,409,414,3,76,38,0,410,411,5,2,0,0,411,
413,3,76,38,0,412,410,1,0,0,0,413,416,1,0,0,0,414,412,1,0,0,0,414,415,1,
0,0,0,415,442,1,0,0,0,416,414,1,0,0,0,417,422,3,66,33,0,418,419,5,2,0,0,
419,421,3,66,33,0,420,418,1,0,0,0,421,424,1,0,0,0,422,420,1,0,0,0,422,423,
1,0,0,0,423,442,1,0,0,0,424,422,1,0,0,0,425,430,3,64,32,0,426,427,5,2,0,
0,427,429,3,64,32,0,428,426,1,0,0,0,429,432,1,0,0,0,430,428,1,0,0,0,430,
431,1,0,0,0,431,442,1,0,0,0,432,430,1,0,0,0,433,438,3,68,34,0,434,435,5,
2,0,0,435,437,3,68,34,0,436,434,1,0,0,0,437,440,1,0,0,0,438,436,1,0,0,0,
438,439,1,0,0,0,439,442,1,0,0,0,440,438,1,0,0,0,441,385,1,0,0,0,441,393,
1,0,0,0,441,401,1,0,0,0,441,409,1,0,0,0,441,417,1,0,0,0,441,425,1,0,0,0,
441,433,1,0,0,0,442,59,1,0,0,0,443,446,5,52,0,0,444,447,3,62,31,0,445,447,
3,72,36,0,446,444,1,0,0,0,446,445,1,0,0,0,447,448,1,0,0,0,448,451,5,33,0,
0,449,452,3,62,31,0,450,452,3,72,36,0,451,449,1,0,0,0,451,450,1,0,0,0,452,
474,1,0,0,0,453,456,5,53,0,0,454,457,3,62,31,0,455,457,3,72,36,0,456,454,
1,0,0,0,456,455,1,0,0,0,457,458,1,0,0,0,458,461,5,33,0,0,459,462,3,62,31,
0,460,462,3,72,36,0,461,459,1,0,0,0,461,460,1,0,0,0,462,474,1,0,0,0,463,
466,5,54,0,0,464,467,3,62,31,0,465,467,3,72,36,0,466,464,1,0,0,0,466,465,
1,0,0,0,467,468,1,0,0,0,468,471,5,33,0,0,469,472,3,62,31,0,470,472,3,72,
36,0,471,469,1,0,0,0,471,470,1,0,0,0,472,474,1,0,0,0,473,443,1,0,0,0,473,
453,1,0,0,0,473,463,1,0,0,0,474,61,1,0,0,0,475,476,5,20,0,0,476,63,1,0,0,
0,477,478,5,22,0,0,478,65,1,0,0,0,479,480,5,21,0,0,480,67,1,0,0,0,481,482,
5,23,0,0,482,69,1,0,0,0,483,484,5,24,0,0,484,71,1,0,0,0,485,486,5,55,0,0,
486,73,1,0,0,0,487,488,5,57,0,0,488,75,1,0,0,0,489,490,5,58,0,0,490,77,1,
0,0,0,491,492,5,56,0,0,492,79,1,0,0,0,54,83,88,97,102,116,125,132,137,142,
147,154,157,163,176,183,188,198,205,213,222,228,234,240,248,256,258,290,
295,299,304,306,314,326,332,344,361,363,368,379,390,398,406,414,422,430,
438,441,446,451,456,461,466,471,473];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class HIPMLParser extends antlr4.Parser {

    static grammarFileName = "HIPML.g4";
    static literalNames = [ null, "':'", "','", "'('", "')'", "'['", "']'",
                            "'Policy Metadata'", "'Policy Attributes'",
                            "'Coverage'", "'Exclusions'", "'Definitions'",
                            "'Contact'", null, null, null, null, null, "'Included only if'",
                            "'Excluded unless'", null, null, null, null,
                            null, null, "'- '", null, null, null, null,
                            null, "'if'", "'and'", "'or'", "'contains'",
                            "'does not contain'", null, null, null, null,
                            null, null, null, null, null, null, null, null,
                            null, null, null, null, null, null, null, null,
                            null, null, "'-'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, "METADATA_SECTION_NAME",
                             "ATTRIBUTES_SECTION_NAME", "COVERAGE_SECTION_NAME",
                             "EXCLUSIONS_SECTION_NAME", "DEFINITIONS_SECTION_NAME",
                             "CONTACT_SECTION_NAME", "METADATA_KEY", "ATTRIBUTES_KEY_WITH_STRING_VALUES",
                             "ATTRIBUTES_KEY_WITH_DATE_VALUES", "ATTRIBUTES_KEY_WITH_NUMBER_VALUES",
                             "COVERAGE_ITEM_LIMIT_KEY", "COVERAGE_ITEM_CONDITION_KEY",
                             "EXCLUSIONS_ITEM_CONDITION_KEY", "VARIABLE",
                             "PROCEDURE", "DIAGNOSIS", "SERVICE", "AMOUNT",
                             "SWITCH_PREFIX", "GROUP_EXPR_STMT_PREFIX",
                             "SWITCH_DEFAULT_SUFFIX", "ALL_ARE_TRUE", "ALL_ARE_FALSE",
                             "AT_LEAST_ONE_IS_TRUE", "AT_LEAST_ONE_IS_FALSE",
                             "IF", "AND", "OR", "CONTAINS", "DOES_NOT_CONTAIN",
                             "ADD", "SUB", "MUL", "DIV", "PER", "LT", "LTE",
                             "GT", "GTE", "NE", "EQ", "MIN", "MAX", "LOW_OF",
                             "HIGH_OF", "DIFF_DAYS", "DIFF_MONTHS", "DIFF_YEARS",
                             "DATE", "BOOLEAN", "NUMBER", "STRING", "HYPHEN",
                             "LINE_COMMENT", "COMMENT", "WS" ];
    static ruleNames = [ "policy", "policySection", "attributesSection",
                         "attributesBody", "attribute", "attributeString",
                         "attributeDate", "attributeNumber", "coverageSection",
                         "coverageBody", "coverageItem", "coverageItemName",
                         "coverageItemDetails", "coverageItemLimit", "coverageItemCondition",
                         "exclusionsSection", "exclusionBody", "exclusionItem",
                         "exclusionItemCondition", "switchStmt", "switchExpr",
                         "switchDefaultExpr", "booleanExpr", "booleanGroupExprStmt",
                         "comparatorExpr", "groupFnExpr", "numberExpr",
                         "listOpExpr", "list", "listExpr", "dateExpr", "variable",
                         "diagnosis", "procedure", "service", "amount",
                         "date", "number", "string", "bool" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = HIPMLParser.ruleNames;
        this.literalNames = HIPMLParser.literalNames;
        this.symbolicNames = HIPMLParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 22:
    	    		return this.booleanExpr_sempred(localctx, predIndex);
    	case 26:
    	    		return this.numberExpr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    booleanExpr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 5);
    		case 1:
    			return this.precpred(this._ctx, 4);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    numberExpr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 2:
    			return this.precpred(this._ctx, 11);
    		case 3:
    			return this.precpred(this._ctx, 10);
    		case 4:
    			return this.precpred(this._ctx, 9);
    		case 5:
    			return this.precpred(this._ctx, 8);
    		case 6:
    			return this.precpred(this._ctx, 7);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	policy() {
	    let localctx = new PolicyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, HIPMLParser.RULE_policy);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 80;
	            this.policySection();
	            this.state = 83;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1792) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	policySection() {
	    let localctx = new PolicySectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, HIPMLParser.RULE_policySection);
	    try {
	        this.state = 88;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 85;
	            this.attributesSection();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 86;
	            this.coverageSection();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 87;
	            this.exclusionsSection();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	attributesSection() {
	    let localctx = new AttributesSectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, HIPMLParser.RULE_attributesSection);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90;
	        this.match(HIPMLParser.ATTRIBUTES_SECTION_NAME);
	        this.state = 91;
	        this.match(HIPMLParser.T__0);
	        this.state = 92;
	        this.attributesBody();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	attributesBody() {
	    let localctx = new AttributesBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, HIPMLParser.RULE_attributesBody);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 94;
	            this.attribute();
	            this.state = 97;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 114688) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	attribute() {
	    let localctx = new AttributeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, HIPMLParser.RULE_attribute);
	    try {
	        this.state = 102;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 99;
	            this.attributeString();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 100;
	            this.attributeDate();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 101;
	            this.attributeNumber();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	attributeString() {
	    let localctx = new AttributeStringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, HIPMLParser.RULE_attributeString);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this.match(HIPMLParser.ATTRIBUTES_KEY_WITH_STRING_VALUES);
	        this.state = 105;
	        this.match(HIPMLParser.T__0);
	        this.state = 106;
	        this.string();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	attributeDate() {
	    let localctx = new AttributeDateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, HIPMLParser.RULE_attributeDate);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        this.match(HIPMLParser.ATTRIBUTES_KEY_WITH_DATE_VALUES);
	        this.state = 109;
	        this.match(HIPMLParser.T__0);
	        this.state = 110;
	        this.date();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	attributeNumber() {
	    let localctx = new AttributeNumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, HIPMLParser.RULE_attributeNumber);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
	        this.match(HIPMLParser.ATTRIBUTES_KEY_WITH_NUMBER_VALUES);
	        this.state = 113;
	        this.match(HIPMLParser.T__0);
	        this.state = 116;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	        case 20:
	        case 24:
	        case 48:
	        case 49:
	        case 50:
	        case 51:
	        case 52:
	        case 53:
	        case 54:
	        case 57:
	            this.state = 114;
	            this.numberExpr(0);
	            break;
	        case 25:
	            this.state = 115;
	            this.switchStmt();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	coverageSection() {
	    let localctx = new CoverageSectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, HIPMLParser.RULE_coverageSection);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 118;
	        this.match(HIPMLParser.COVERAGE_SECTION_NAME);
	        this.state = 119;
	        this.match(HIPMLParser.T__0);
	        this.state = 120;
	        this.coverageBody();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	coverageBody() {
	    let localctx = new CoverageBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, HIPMLParser.RULE_coverageBody);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 123;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 122;
	            this.coverageItem();
	            this.state = 125;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 14680064) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	coverageItem() {
	    let localctx = new CoverageItemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, HIPMLParser.RULE_coverageItem);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 127;
	        this.coverageItemName();
	        this.state = 132;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 128;
	            this.match(HIPMLParser.T__1);
	            this.state = 129;
	            this.coverageItemName();
	            this.state = 134;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 137;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 135;
	            this.match(HIPMLParser.T__0);
	            this.state = 136;
	            this.coverageItemDetails();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	coverageItemName() {
	    let localctx = new CoverageItemNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, HIPMLParser.RULE_coverageItemName);
	    try {
	        this.state = 142;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 21:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 139;
	            this.procedure();
	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 140;
	            this.diagnosis();
	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 141;
	            this.service();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	coverageItemDetails() {
	    let localctx = new CoverageItemDetailsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, HIPMLParser.RULE_coverageItemDetails);
	    var _la = 0;
	    try {
	        this.state = 157;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 145;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 144;
	                this.coverageItemLimit();
	                this.state = 147;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===17);
	            this.state = 149;
	            this.coverageItemCondition();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 152;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 151;
	                this.coverageItemLimit();
	                this.state = 154;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===17);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 156;
	            this.coverageItemCondition();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	coverageItemLimit() {
	    let localctx = new CoverageItemLimitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, HIPMLParser.RULE_coverageItemLimit);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 159;
	        this.match(HIPMLParser.COVERAGE_ITEM_LIMIT_KEY);
	        this.state = 160;
	        this.match(HIPMLParser.T__0);
	        this.state = 163;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	        case 20:
	        case 24:
	        case 48:
	        case 49:
	        case 50:
	        case 51:
	        case 52:
	        case 53:
	        case 54:
	        case 57:
	            this.state = 161;
	            this.numberExpr(0);
	            break;
	        case 25:
	            this.state = 162;
	            this.switchStmt();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	coverageItemCondition() {
	    let localctx = new CoverageItemConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, HIPMLParser.RULE_coverageItemCondition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 165;
	        this.match(HIPMLParser.COVERAGE_ITEM_CONDITION_KEY);
	        this.state = 166;
	        this.match(HIPMLParser.T__0);
	        this.state = 167;
	        this.booleanExpr(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	exclusionsSection() {
	    let localctx = new ExclusionsSectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, HIPMLParser.RULE_exclusionsSection);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 169;
	        this.match(HIPMLParser.EXCLUSIONS_SECTION_NAME);
	        this.state = 170;
	        this.match(HIPMLParser.T__0);
	        this.state = 171;
	        this.exclusionBody();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	exclusionBody() {
	    let localctx = new ExclusionBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, HIPMLParser.RULE_exclusionBody);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 174;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 173;
	            this.exclusionItem();
	            this.state = 176;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 14680064) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	exclusionItem() {
	    let localctx = new ExclusionItemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, HIPMLParser.RULE_exclusionItem);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 178;
	        this.coverageItemName();
	        this.state = 183;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 179;
	            this.match(HIPMLParser.T__1);
	            this.state = 180;
	            this.coverageItemName();
	            this.state = 185;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 188;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 186;
	            this.match(HIPMLParser.T__0);
	            this.state = 187;
	            this.exclusionItemCondition();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	exclusionItemCondition() {
	    let localctx = new ExclusionItemConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, HIPMLParser.RULE_exclusionItemCondition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 190;
	        this.match(HIPMLParser.EXCLUSIONS_ITEM_CONDITION_KEY);
	        this.state = 191;
	        this.match(HIPMLParser.T__0);
	        this.state = 192;
	        this.booleanExpr(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	switchStmt() {
	    let localctx = new SwitchStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, HIPMLParser.RULE_switchStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 194;
	        this.match(HIPMLParser.SWITCH_PREFIX);
	        this.state = 196;
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 195;
	        		this.switchExpr();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 198;
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,16, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 200;
	        this.switchDefaultExpr();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	switchExpr() {
	    let localctx = new SwitchExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, HIPMLParser.RULE_switchExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 202;
	        this.match(HIPMLParser.GROUP_EXPR_STMT_PREFIX);
	        this.state = 205;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	        case 20:
	        case 24:
	        case 48:
	        case 49:
	        case 50:
	        case 51:
	        case 52:
	        case 53:
	        case 54:
	        case 57:
	            this.state = 203;
	            this.numberExpr(0);
	            break;
	        case 58:
	            this.state = 204;
	            this.string();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 207;
	        this.match(HIPMLParser.IF);
	        this.state = 208;
	        this.booleanExpr(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	switchDefaultExpr() {
	    let localctx = new SwitchDefaultExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, HIPMLParser.RULE_switchDefaultExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 210;
	        this.match(HIPMLParser.GROUP_EXPR_STMT_PREFIX);
	        this.state = 213;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	        case 20:
	        case 24:
	        case 48:
	        case 49:
	        case 50:
	        case 51:
	        case 52:
	        case 53:
	        case 54:
	        case 57:
	            this.state = 211;
	            this.numberExpr(0);
	            break;
	        case 58:
	            this.state = 212;
	            this.string();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 215;
	        this.match(HIPMLParser.SWITCH_DEFAULT_SUFFIX);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	booleanExpr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new BooleanExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 44;
	    this.enterRecursionRule(localctx, 44, HIPMLParser.RULE_booleanExpr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 248;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 218;
	            this.match(HIPMLParser.ALL_ARE_TRUE);
	            this.state = 220;
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 219;
	            		this.booleanGroupExprStmt();
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 222;
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,19, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;

	        case 2:
	            this.state = 224;
	            this.match(HIPMLParser.ALL_ARE_FALSE);
	            this.state = 226;
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 225;
	            		this.booleanGroupExprStmt();
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 228;
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,20, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;

	        case 3:
	            this.state = 230;
	            this.match(HIPMLParser.AT_LEAST_ONE_IS_TRUE);
	            this.state = 232;
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 231;
	            		this.booleanGroupExprStmt();
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 234;
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,21, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;

	        case 4:
	            this.state = 236;
	            this.match(HIPMLParser.AT_LEAST_ONE_IS_FALSE);
	            this.state = 238;
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 237;
	            		this.booleanGroupExprStmt();
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 240;
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,22, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;

	        case 5:
	            this.state = 242;
	            this.comparatorExpr();
	            break;

	        case 6:
	            this.state = 243;
	            this.listOpExpr();
	            break;

	        case 7:
	            this.state = 244;
	            this.match(HIPMLParser.T__2);
	            this.state = 245;
	            this.booleanExpr(0);
	            this.state = 246;
	            this.match(HIPMLParser.T__3);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 258;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,25,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 256;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new BooleanExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, HIPMLParser.RULE_booleanExpr);
	                    this.state = 250;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 251;
	                    this.match(HIPMLParser.AND);
	                    this.state = 252;
	                    this.booleanExpr(6);
	                    break;

	                case 2:
	                    localctx = new BooleanExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, HIPMLParser.RULE_booleanExpr);
	                    this.state = 253;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 254;
	                    this.match(HIPMLParser.OR);
	                    this.state = 255;
	                    this.booleanExpr(5);
	                    break;

	                }
	            }
	            this.state = 260;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,25,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	booleanGroupExprStmt() {
	    let localctx = new BooleanGroupExprStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, HIPMLParser.RULE_booleanGroupExprStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 261;
	        this.match(HIPMLParser.GROUP_EXPR_STMT_PREFIX);
	        this.state = 262;
	        this.booleanExpr(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comparatorExpr() {
	    let localctx = new ComparatorExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, HIPMLParser.RULE_comparatorExpr);
	    try {
	        this.state = 306;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 264;
	            this.numberExpr(0);
	            this.state = 265;
	            this.match(HIPMLParser.LT);
	            this.state = 266;
	            this.numberExpr(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 268;
	            this.numberExpr(0);
	            this.state = 269;
	            this.match(HIPMLParser.LTE);
	            this.state = 270;
	            this.numberExpr(0);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 272;
	            this.numberExpr(0);
	            this.state = 273;
	            this.match(HIPMLParser.GT);
	            this.state = 274;
	            this.numberExpr(0);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 276;
	            this.numberExpr(0);
	            this.state = 277;
	            this.match(HIPMLParser.GTE);
	            this.state = 278;
	            this.numberExpr(0);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 280;
	            this.numberExpr(0);
	            this.state = 281;
	            this.match(HIPMLParser.EQ);
	            this.state = 282;
	            this.numberExpr(0);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 284;
	            this.numberExpr(0);
	            this.state = 285;
	            this.match(HIPMLParser.NE);
	            this.state = 286;
	            this.numberExpr(0);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 290;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 20:
	                this.state = 288;
	                this.variable();
	                break;
	            case 58:
	                this.state = 289;
	                this.string();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 292;
	            this.match(HIPMLParser.EQ);
	            this.state = 295;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 20:
	                this.state = 293;
	                this.variable();
	                break;
	            case 58:
	                this.state = 294;
	                this.string();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 299;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 20:
	                this.state = 297;
	                this.variable();
	                break;
	            case 58:
	                this.state = 298;
	                this.string();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 301;
	            this.match(HIPMLParser.NE);
	            this.state = 304;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 20:
	                this.state = 302;
	                this.variable();
	                break;
	            case 58:
	                this.state = 303;
	                this.string();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	groupFnExpr() {
	    let localctx = new GroupFnExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, HIPMLParser.RULE_groupFnExpr);
	    var _la = 0;
	    try {
	        this.state = 332;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 48:
	        case 50:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 308;
	            _la = this._input.LA(1);
	            if(!(_la===48 || _la===50)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 309;
	            this.numberExpr(0);
	            this.state = 314;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 310;
	                this.match(HIPMLParser.T__1);
	                this.state = 311;
	                this.numberExpr(0);
	                this.state = 316;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 317;
	            this.match(HIPMLParser.AND);
	            this.state = 318;
	            this.numberExpr(0);
	            break;
	        case 49:
	        case 51:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 320;
	            _la = this._input.LA(1);
	            if(!(_la===49 || _la===51)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 321;
	            this.numberExpr(0);
	            this.state = 326;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 322;
	                this.match(HIPMLParser.T__1);
	                this.state = 323;
	                this.numberExpr(0);
	                this.state = 328;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 329;
	            this.match(HIPMLParser.AND);
	            this.state = 330;
	            this.numberExpr(0);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	numberExpr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new NumberExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 52;
	    this.enterRecursionRule(localctx, 52, HIPMLParser.RULE_numberExpr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 344;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 52:
	        case 53:
	        case 54:
	            this.state = 335;
	            this.dateExpr();
	            break;
	        case 48:
	        case 49:
	        case 50:
	        case 51:
	            this.state = 336;
	            this.groupFnExpr();
	            break;
	        case 20:
	            this.state = 337;
	            this.variable();
	            break;
	        case 24:
	            this.state = 338;
	            this.amount();
	            break;
	        case 57:
	            this.state = 339;
	            this.number();
	            break;
	        case 3:
	            this.state = 340;
	            this.match(HIPMLParser.T__2);
	            this.state = 341;
	            this.numberExpr(0);
	            this.state = 342;
	            this.match(HIPMLParser.T__3);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 363;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,36,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 361;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new NumberExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, HIPMLParser.RULE_numberExpr);
	                    this.state = 346;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 347;
	                    this.match(HIPMLParser.MUL);
	                    this.state = 348;
	                    this.numberExpr(12);
	                    break;

	                case 2:
	                    localctx = new NumberExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, HIPMLParser.RULE_numberExpr);
	                    this.state = 349;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 350;
	                    this.match(HIPMLParser.DIV);
	                    this.state = 351;
	                    this.numberExpr(11);
	                    break;

	                case 3:
	                    localctx = new NumberExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, HIPMLParser.RULE_numberExpr);
	                    this.state = 352;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 353;
	                    this.match(HIPMLParser.PER);
	                    this.state = 354;
	                    this.numberExpr(10);
	                    break;

	                case 4:
	                    localctx = new NumberExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, HIPMLParser.RULE_numberExpr);
	                    this.state = 355;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 356;
	                    this.match(HIPMLParser.ADD);
	                    this.state = 357;
	                    this.numberExpr(9);
	                    break;

	                case 5:
	                    localctx = new NumberExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, HIPMLParser.RULE_numberExpr);
	                    this.state = 358;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 359;
	                    this.match(HIPMLParser.SUB);
	                    this.state = 360;
	                    this.numberExpr(8);
	                    break;

	                }
	            }
	            this.state = 365;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,36,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	listOpExpr() {
	    let localctx = new ListOpExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, HIPMLParser.RULE_listOpExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 368;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.state = 366;
	            this.list();
	            break;
	        case 20:
	            this.state = 367;
	            this.variable();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 370;
	        _la = this._input.LA(1);
	        if(!(_la===35 || _la===36)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 379;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 57:
	            this.state = 371;
	            this.number();
	            break;
	        case 24:
	            this.state = 372;
	            this.amount();
	            break;
	        case 20:
	            this.state = 373;
	            this.variable();
	            break;
	        case 55:
	            this.state = 374;
	            this.date();
	            break;
	        case 58:
	            this.state = 375;
	            this.string();
	            break;
	        case 21:
	            this.state = 376;
	            this.procedure();
	            break;
	        case 22:
	            this.state = 377;
	            this.diagnosis();
	            break;
	        case 23:
	            this.state = 378;
	            this.service();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	list() {
	    let localctx = new ListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, HIPMLParser.RULE_list);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 381;
	        this.match(HIPMLParser.T__4);
	        this.state = 382;
	        this.listExpr();
	        this.state = 383;
	        this.match(HIPMLParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	listExpr() {
	    let localctx = new ListExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, HIPMLParser.RULE_listExpr);
	    var _la = 0;
	    try {
	        this.state = 441;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 24:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 385;
	            this.amount();
	            this.state = 390;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 386;
	                this.match(HIPMLParser.T__1);
	                this.state = 387;
	                this.amount();
	                this.state = 392;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 393;
	            this.variable();
	            this.state = 398;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 394;
	                this.match(HIPMLParser.T__1);
	                this.state = 395;
	                this.variable();
	                this.state = 400;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case 55:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 401;
	            this.date();
	            this.state = 406;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 402;
	                this.match(HIPMLParser.T__1);
	                this.state = 403;
	                this.date();
	                this.state = 408;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case 58:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 409;
	            this.string();
	            this.state = 414;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 410;
	                this.match(HIPMLParser.T__1);
	                this.state = 411;
	                this.string();
	                this.state = 416;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 417;
	            this.procedure();
	            this.state = 422;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 418;
	                this.match(HIPMLParser.T__1);
	                this.state = 419;
	                this.procedure();
	                this.state = 424;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 425;
	            this.diagnosis();
	            this.state = 430;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 426;
	                this.match(HIPMLParser.T__1);
	                this.state = 427;
	                this.diagnosis();
	                this.state = 432;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 433;
	            this.service();
	            this.state = 438;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 434;
	                this.match(HIPMLParser.T__1);
	                this.state = 435;
	                this.service();
	                this.state = 440;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dateExpr() {
	    let localctx = new DateExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, HIPMLParser.RULE_dateExpr);
	    try {
	        this.state = 473;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 52:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 443;
	            this.match(HIPMLParser.DIFF_DAYS);
	            this.state = 446;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 20:
	                this.state = 444;
	                this.variable();
	                break;
	            case 55:
	                this.state = 445;
	                this.date();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 448;
	            this.match(HIPMLParser.AND);
	            this.state = 451;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 20:
	                this.state = 449;
	                this.variable();
	                break;
	            case 55:
	                this.state = 450;
	                this.date();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;
	        case 53:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 453;
	            this.match(HIPMLParser.DIFF_MONTHS);
	            this.state = 456;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 20:
	                this.state = 454;
	                this.variable();
	                break;
	            case 55:
	                this.state = 455;
	                this.date();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 458;
	            this.match(HIPMLParser.AND);
	            this.state = 461;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 20:
	                this.state = 459;
	                this.variable();
	                break;
	            case 55:
	                this.state = 460;
	                this.date();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;
	        case 54:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 463;
	            this.match(HIPMLParser.DIFF_YEARS);
	            this.state = 466;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 20:
	                this.state = 464;
	                this.variable();
	                break;
	            case 55:
	                this.state = 465;
	                this.date();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 468;
	            this.match(HIPMLParser.AND);
	            this.state = 471;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 20:
	                this.state = 469;
	                this.variable();
	                break;
	            case 55:
	                this.state = 470;
	                this.date();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, HIPMLParser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 475;
	        this.match(HIPMLParser.VARIABLE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	diagnosis() {
	    let localctx = new DiagnosisContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, HIPMLParser.RULE_diagnosis);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 477;
	        this.match(HIPMLParser.DIAGNOSIS);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	procedure() {
	    let localctx = new ProcedureContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, HIPMLParser.RULE_procedure);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 479;
	        this.match(HIPMLParser.PROCEDURE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	service() {
	    let localctx = new ServiceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, HIPMLParser.RULE_service);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 481;
	        this.match(HIPMLParser.SERVICE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	amount() {
	    let localctx = new AmountContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, HIPMLParser.RULE_amount);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 483;
	        this.match(HIPMLParser.AMOUNT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	date() {
	    let localctx = new DateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, HIPMLParser.RULE_date);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 485;
	        this.match(HIPMLParser.DATE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, HIPMLParser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 487;
	        this.match(HIPMLParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	string() {
	    let localctx = new StringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, HIPMLParser.RULE_string);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 489;
	        this.match(HIPMLParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bool() {
	    let localctx = new BoolContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, HIPMLParser.RULE_bool);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 491;
	        this.match(HIPMLParser.BOOLEAN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

HIPMLParser.EOF = antlr4.Token.EOF;
HIPMLParser.T__0 = 1;
HIPMLParser.T__1 = 2;
HIPMLParser.T__2 = 3;
HIPMLParser.T__3 = 4;
HIPMLParser.T__4 = 5;
HIPMLParser.T__5 = 6;
HIPMLParser.METADATA_SECTION_NAME = 7;
HIPMLParser.ATTRIBUTES_SECTION_NAME = 8;
HIPMLParser.COVERAGE_SECTION_NAME = 9;
HIPMLParser.EXCLUSIONS_SECTION_NAME = 10;
HIPMLParser.DEFINITIONS_SECTION_NAME = 11;
HIPMLParser.CONTACT_SECTION_NAME = 12;
HIPMLParser.METADATA_KEY = 13;
HIPMLParser.ATTRIBUTES_KEY_WITH_STRING_VALUES = 14;
HIPMLParser.ATTRIBUTES_KEY_WITH_DATE_VALUES = 15;
HIPMLParser.ATTRIBUTES_KEY_WITH_NUMBER_VALUES = 16;
HIPMLParser.COVERAGE_ITEM_LIMIT_KEY = 17;
HIPMLParser.COVERAGE_ITEM_CONDITION_KEY = 18;
HIPMLParser.EXCLUSIONS_ITEM_CONDITION_KEY = 19;
HIPMLParser.VARIABLE = 20;
HIPMLParser.PROCEDURE = 21;
HIPMLParser.DIAGNOSIS = 22;
HIPMLParser.SERVICE = 23;
HIPMLParser.AMOUNT = 24;
HIPMLParser.SWITCH_PREFIX = 25;
HIPMLParser.GROUP_EXPR_STMT_PREFIX = 26;
HIPMLParser.SWITCH_DEFAULT_SUFFIX = 27;
HIPMLParser.ALL_ARE_TRUE = 28;
HIPMLParser.ALL_ARE_FALSE = 29;
HIPMLParser.AT_LEAST_ONE_IS_TRUE = 30;
HIPMLParser.AT_LEAST_ONE_IS_FALSE = 31;
HIPMLParser.IF = 32;
HIPMLParser.AND = 33;
HIPMLParser.OR = 34;
HIPMLParser.CONTAINS = 35;
HIPMLParser.DOES_NOT_CONTAIN = 36;
HIPMLParser.ADD = 37;
HIPMLParser.SUB = 38;
HIPMLParser.MUL = 39;
HIPMLParser.DIV = 40;
HIPMLParser.PER = 41;
HIPMLParser.LT = 42;
HIPMLParser.LTE = 43;
HIPMLParser.GT = 44;
HIPMLParser.GTE = 45;
HIPMLParser.NE = 46;
HIPMLParser.EQ = 47;
HIPMLParser.MIN = 48;
HIPMLParser.MAX = 49;
HIPMLParser.LOW_OF = 50;
HIPMLParser.HIGH_OF = 51;
HIPMLParser.DIFF_DAYS = 52;
HIPMLParser.DIFF_MONTHS = 53;
HIPMLParser.DIFF_YEARS = 54;
HIPMLParser.DATE = 55;
HIPMLParser.BOOLEAN = 56;
HIPMLParser.NUMBER = 57;
HIPMLParser.STRING = 58;
HIPMLParser.HYPHEN = 59;
HIPMLParser.LINE_COMMENT = 60;
HIPMLParser.COMMENT = 61;
HIPMLParser.WS = 62;

HIPMLParser.RULE_policy = 0;
HIPMLParser.RULE_policySection = 1;
HIPMLParser.RULE_attributesSection = 2;
HIPMLParser.RULE_attributesBody = 3;
HIPMLParser.RULE_attribute = 4;
HIPMLParser.RULE_attributeString = 5;
HIPMLParser.RULE_attributeDate = 6;
HIPMLParser.RULE_attributeNumber = 7;
HIPMLParser.RULE_coverageSection = 8;
HIPMLParser.RULE_coverageBody = 9;
HIPMLParser.RULE_coverageItem = 10;
HIPMLParser.RULE_coverageItemName = 11;
HIPMLParser.RULE_coverageItemDetails = 12;
HIPMLParser.RULE_coverageItemLimit = 13;
HIPMLParser.RULE_coverageItemCondition = 14;
HIPMLParser.RULE_exclusionsSection = 15;
HIPMLParser.RULE_exclusionBody = 16;
HIPMLParser.RULE_exclusionItem = 17;
HIPMLParser.RULE_exclusionItemCondition = 18;
HIPMLParser.RULE_switchStmt = 19;
HIPMLParser.RULE_switchExpr = 20;
HIPMLParser.RULE_switchDefaultExpr = 21;
HIPMLParser.RULE_booleanExpr = 22;
HIPMLParser.RULE_booleanGroupExprStmt = 23;
HIPMLParser.RULE_comparatorExpr = 24;
HIPMLParser.RULE_groupFnExpr = 25;
HIPMLParser.RULE_numberExpr = 26;
HIPMLParser.RULE_listOpExpr = 27;
HIPMLParser.RULE_list = 28;
HIPMLParser.RULE_listExpr = 29;
HIPMLParser.RULE_dateExpr = 30;
HIPMLParser.RULE_variable = 31;
HIPMLParser.RULE_diagnosis = 32;
HIPMLParser.RULE_procedure = 33;
HIPMLParser.RULE_service = 34;
HIPMLParser.RULE_amount = 35;
HIPMLParser.RULE_date = 36;
HIPMLParser.RULE_number = 37;
HIPMLParser.RULE_string = 38;
HIPMLParser.RULE_bool = 39;

class PolicyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HIPMLParser.RULE_policy;
    }

	policySection = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PolicySectionContext);
	    } else {
	        return this.getTypedRuleContext(PolicySectionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.enterPolicy(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.exitPolicy(this);
		}
	}


}



class PolicySectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HIPMLParser.RULE_policySection;
    }

	attributesSection() {
	    return this.getTypedRuleContext(AttributesSectionContext,0);
	};

	coverageSection() {
	    return this.getTypedRuleContext(CoverageSectionContext,0);
	};

	exclusionsSection() {
	    return this.getTypedRuleContext(ExclusionsSectionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.enterPolicySection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.exitPolicySection(this);
		}
	}


}



class AttributesSectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HIPMLParser.RULE_attributesSection;
    }

	ATTRIBUTES_SECTION_NAME() {
	    return this.getToken(HIPMLParser.ATTRIBUTES_SECTION_NAME, 0);
	};

	attributesBody() {
	    return this.getTypedRuleContext(AttributesBodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.enterAttributesSection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.exitAttributesSection(this);
		}
	}


}



class AttributesBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HIPMLParser.RULE_attributesBody;
    }

	attribute = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AttributeContext);
	    } else {
	        return this.getTypedRuleContext(AttributeContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.enterAttributesBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.exitAttributesBody(this);
		}
	}


}



class AttributeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HIPMLParser.RULE_attribute;
    }

	attributeString() {
	    return this.getTypedRuleContext(AttributeStringContext,0);
	};

	attributeDate() {
	    return this.getTypedRuleContext(AttributeDateContext,0);
	};

	attributeNumber() {
	    return this.getTypedRuleContext(AttributeNumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.enterAttribute(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.exitAttribute(this);
		}
	}


}



class AttributeStringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HIPMLParser.RULE_attributeString;
    }

	ATTRIBUTES_KEY_WITH_STRING_VALUES() {
	    return this.getToken(HIPMLParser.ATTRIBUTES_KEY_WITH_STRING_VALUES, 0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.enterAttributeString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.exitAttributeString(this);
		}
	}


}



class AttributeDateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HIPMLParser.RULE_attributeDate;
    }

	ATTRIBUTES_KEY_WITH_DATE_VALUES() {
	    return this.getToken(HIPMLParser.ATTRIBUTES_KEY_WITH_DATE_VALUES, 0);
	};

	date() {
	    return this.getTypedRuleContext(DateContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.enterAttributeDate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.exitAttributeDate(this);
		}
	}


}



class AttributeNumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HIPMLParser.RULE_attributeNumber;
    }

	ATTRIBUTES_KEY_WITH_NUMBER_VALUES() {
	    return this.getToken(HIPMLParser.ATTRIBUTES_KEY_WITH_NUMBER_VALUES, 0);
	};

	numberExpr() {
	    return this.getTypedRuleContext(NumberExprContext,0);
	};

	switchStmt() {
	    return this.getTypedRuleContext(SwitchStmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.enterAttributeNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.exitAttributeNumber(this);
		}
	}


}



class CoverageSectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HIPMLParser.RULE_coverageSection;
    }

	COVERAGE_SECTION_NAME() {
	    return this.getToken(HIPMLParser.COVERAGE_SECTION_NAME, 0);
	};

	coverageBody() {
	    return this.getTypedRuleContext(CoverageBodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.enterCoverageSection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.exitCoverageSection(this);
		}
	}


}



class CoverageBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HIPMLParser.RULE_coverageBody;
    }

	coverageItem = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CoverageItemContext);
	    } else {
	        return this.getTypedRuleContext(CoverageItemContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.enterCoverageBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.exitCoverageBody(this);
		}
	}


}



class CoverageItemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HIPMLParser.RULE_coverageItem;
    }

	coverageItemName = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CoverageItemNameContext);
	    } else {
	        return this.getTypedRuleContext(CoverageItemNameContext,i);
	    }
	};

	coverageItemDetails() {
	    return this.getTypedRuleContext(CoverageItemDetailsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.enterCoverageItem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.exitCoverageItem(this);
		}
	}


}



class CoverageItemNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HIPMLParser.RULE_coverageItemName;
    }

	procedure() {
	    return this.getTypedRuleContext(ProcedureContext,0);
	};

	diagnosis() {
	    return this.getTypedRuleContext(DiagnosisContext,0);
	};

	service() {
	    return this.getTypedRuleContext(ServiceContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.enterCoverageItemName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.exitCoverageItemName(this);
		}
	}


}



class CoverageItemDetailsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HIPMLParser.RULE_coverageItemDetails;
    }

	coverageItemCondition() {
	    return this.getTypedRuleContext(CoverageItemConditionContext,0);
	};

	coverageItemLimit = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CoverageItemLimitContext);
	    } else {
	        return this.getTypedRuleContext(CoverageItemLimitContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.enterCoverageItemDetails(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.exitCoverageItemDetails(this);
		}
	}


}



class CoverageItemLimitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HIPMLParser.RULE_coverageItemLimit;
    }

	COVERAGE_ITEM_LIMIT_KEY() {
	    return this.getToken(HIPMLParser.COVERAGE_ITEM_LIMIT_KEY, 0);
	};

	numberExpr() {
	    return this.getTypedRuleContext(NumberExprContext,0);
	};

	switchStmt() {
	    return this.getTypedRuleContext(SwitchStmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.enterCoverageItemLimit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.exitCoverageItemLimit(this);
		}
	}


}



class CoverageItemConditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HIPMLParser.RULE_coverageItemCondition;
    }

	COVERAGE_ITEM_CONDITION_KEY() {
	    return this.getToken(HIPMLParser.COVERAGE_ITEM_CONDITION_KEY, 0);
	};

	booleanExpr() {
	    return this.getTypedRuleContext(BooleanExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.enterCoverageItemCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.exitCoverageItemCondition(this);
		}
	}


}



class ExclusionsSectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HIPMLParser.RULE_exclusionsSection;
    }

	EXCLUSIONS_SECTION_NAME() {
	    return this.getToken(HIPMLParser.EXCLUSIONS_SECTION_NAME, 0);
	};

	exclusionBody() {
	    return this.getTypedRuleContext(ExclusionBodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.enterExclusionsSection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.exitExclusionsSection(this);
		}
	}


}



class ExclusionBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HIPMLParser.RULE_exclusionBody;
    }

	exclusionItem = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExclusionItemContext);
	    } else {
	        return this.getTypedRuleContext(ExclusionItemContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.enterExclusionBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.exitExclusionBody(this);
		}
	}


}



class ExclusionItemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HIPMLParser.RULE_exclusionItem;
    }

	coverageItemName = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CoverageItemNameContext);
	    } else {
	        return this.getTypedRuleContext(CoverageItemNameContext,i);
	    }
	};

	exclusionItemCondition() {
	    return this.getTypedRuleContext(ExclusionItemConditionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.enterExclusionItem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.exitExclusionItem(this);
		}
	}


}



class ExclusionItemConditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HIPMLParser.RULE_exclusionItemCondition;
    }

	EXCLUSIONS_ITEM_CONDITION_KEY() {
	    return this.getToken(HIPMLParser.EXCLUSIONS_ITEM_CONDITION_KEY, 0);
	};

	booleanExpr() {
	    return this.getTypedRuleContext(BooleanExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.enterExclusionItemCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.exitExclusionItemCondition(this);
		}
	}


}



class SwitchStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HIPMLParser.RULE_switchStmt;
    }

	SWITCH_PREFIX() {
	    return this.getToken(HIPMLParser.SWITCH_PREFIX, 0);
	};

	switchDefaultExpr() {
	    return this.getTypedRuleContext(SwitchDefaultExprContext,0);
	};

	switchExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SwitchExprContext);
	    } else {
	        return this.getTypedRuleContext(SwitchExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.enterSwitchStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.exitSwitchStmt(this);
		}
	}


}



class SwitchExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HIPMLParser.RULE_switchExpr;
    }

	GROUP_EXPR_STMT_PREFIX() {
	    return this.getToken(HIPMLParser.GROUP_EXPR_STMT_PREFIX, 0);
	};

	IF() {
	    return this.getToken(HIPMLParser.IF, 0);
	};

	booleanExpr() {
	    return this.getTypedRuleContext(BooleanExprContext,0);
	};

	numberExpr() {
	    return this.getTypedRuleContext(NumberExprContext,0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.enterSwitchExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.exitSwitchExpr(this);
		}
	}


}



class SwitchDefaultExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HIPMLParser.RULE_switchDefaultExpr;
    }

	GROUP_EXPR_STMT_PREFIX() {
	    return this.getToken(HIPMLParser.GROUP_EXPR_STMT_PREFIX, 0);
	};

	SWITCH_DEFAULT_SUFFIX() {
	    return this.getToken(HIPMLParser.SWITCH_DEFAULT_SUFFIX, 0);
	};

	numberExpr() {
	    return this.getTypedRuleContext(NumberExprContext,0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.enterSwitchDefaultExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.exitSwitchDefaultExpr(this);
		}
	}


}



class BooleanExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HIPMLParser.RULE_booleanExpr;
    }

	ALL_ARE_TRUE() {
	    return this.getToken(HIPMLParser.ALL_ARE_TRUE, 0);
	};

	booleanGroupExprStmt = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BooleanGroupExprStmtContext);
	    } else {
	        return this.getTypedRuleContext(BooleanGroupExprStmtContext,i);
	    }
	};

	ALL_ARE_FALSE() {
	    return this.getToken(HIPMLParser.ALL_ARE_FALSE, 0);
	};

	AT_LEAST_ONE_IS_TRUE() {
	    return this.getToken(HIPMLParser.AT_LEAST_ONE_IS_TRUE, 0);
	};

	AT_LEAST_ONE_IS_FALSE() {
	    return this.getToken(HIPMLParser.AT_LEAST_ONE_IS_FALSE, 0);
	};

	comparatorExpr() {
	    return this.getTypedRuleContext(ComparatorExprContext,0);
	};

	listOpExpr() {
	    return this.getTypedRuleContext(ListOpExprContext,0);
	};

	booleanExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BooleanExprContext);
	    } else {
	        return this.getTypedRuleContext(BooleanExprContext,i);
	    }
	};

	AND() {
	    return this.getToken(HIPMLParser.AND, 0);
	};

	OR() {
	    return this.getToken(HIPMLParser.OR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.enterBooleanExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.exitBooleanExpr(this);
		}
	}


}



class BooleanGroupExprStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HIPMLParser.RULE_booleanGroupExprStmt;
    }

	GROUP_EXPR_STMT_PREFIX() {
	    return this.getToken(HIPMLParser.GROUP_EXPR_STMT_PREFIX, 0);
	};

	booleanExpr() {
	    return this.getTypedRuleContext(BooleanExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.enterBooleanGroupExprStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.exitBooleanGroupExprStmt(this);
		}
	}


}



class ComparatorExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HIPMLParser.RULE_comparatorExpr;
    }

	numberExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NumberExprContext);
	    } else {
	        return this.getTypedRuleContext(NumberExprContext,i);
	    }
	};

	LT() {
	    return this.getToken(HIPMLParser.LT, 0);
	};

	LTE() {
	    return this.getToken(HIPMLParser.LTE, 0);
	};

	GT() {
	    return this.getToken(HIPMLParser.GT, 0);
	};

	GTE() {
	    return this.getToken(HIPMLParser.GTE, 0);
	};

	EQ() {
	    return this.getToken(HIPMLParser.EQ, 0);
	};

	NE() {
	    return this.getToken(HIPMLParser.NE, 0);
	};

	variable = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VariableContext);
	    } else {
	        return this.getTypedRuleContext(VariableContext,i);
	    }
	};

	string = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StringContext);
	    } else {
	        return this.getTypedRuleContext(StringContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.enterComparatorExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.exitComparatorExpr(this);
		}
	}


}



class GroupFnExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HIPMLParser.RULE_groupFnExpr;
    }

	numberExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NumberExprContext);
	    } else {
	        return this.getTypedRuleContext(NumberExprContext,i);
	    }
	};

	AND() {
	    return this.getToken(HIPMLParser.AND, 0);
	};

	MIN() {
	    return this.getToken(HIPMLParser.MIN, 0);
	};

	LOW_OF() {
	    return this.getToken(HIPMLParser.LOW_OF, 0);
	};

	MAX() {
	    return this.getToken(HIPMLParser.MAX, 0);
	};

	HIGH_OF() {
	    return this.getToken(HIPMLParser.HIGH_OF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.enterGroupFnExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.exitGroupFnExpr(this);
		}
	}


}



class NumberExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HIPMLParser.RULE_numberExpr;
    }

	dateExpr() {
	    return this.getTypedRuleContext(DateExprContext,0);
	};

	groupFnExpr() {
	    return this.getTypedRuleContext(GroupFnExprContext,0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	amount() {
	    return this.getTypedRuleContext(AmountContext,0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	numberExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NumberExprContext);
	    } else {
	        return this.getTypedRuleContext(NumberExprContext,i);
	    }
	};

	MUL() {
	    return this.getToken(HIPMLParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(HIPMLParser.DIV, 0);
	};

	PER() {
	    return this.getToken(HIPMLParser.PER, 0);
	};

	ADD() {
	    return this.getToken(HIPMLParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(HIPMLParser.SUB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.enterNumberExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.exitNumberExpr(this);
		}
	}


}



class ListOpExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HIPMLParser.RULE_listOpExpr;
    }

	CONTAINS() {
	    return this.getToken(HIPMLParser.CONTAINS, 0);
	};

	DOES_NOT_CONTAIN() {
	    return this.getToken(HIPMLParser.DOES_NOT_CONTAIN, 0);
	};

	list() {
	    return this.getTypedRuleContext(ListContext,0);
	};

	variable = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VariableContext);
	    } else {
	        return this.getTypedRuleContext(VariableContext,i);
	    }
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	amount() {
	    return this.getTypedRuleContext(AmountContext,0);
	};

	date() {
	    return this.getTypedRuleContext(DateContext,0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	procedure() {
	    return this.getTypedRuleContext(ProcedureContext,0);
	};

	diagnosis() {
	    return this.getTypedRuleContext(DiagnosisContext,0);
	};

	service() {
	    return this.getTypedRuleContext(ServiceContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.enterListOpExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.exitListOpExpr(this);
		}
	}


}



class ListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HIPMLParser.RULE_list;
    }

	listExpr() {
	    return this.getTypedRuleContext(ListExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.enterList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.exitList(this);
		}
	}


}



class ListExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HIPMLParser.RULE_listExpr;
    }

	amount = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AmountContext);
	    } else {
	        return this.getTypedRuleContext(AmountContext,i);
	    }
	};

	variable = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VariableContext);
	    } else {
	        return this.getTypedRuleContext(VariableContext,i);
	    }
	};

	date = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DateContext);
	    } else {
	        return this.getTypedRuleContext(DateContext,i);
	    }
	};

	string = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StringContext);
	    } else {
	        return this.getTypedRuleContext(StringContext,i);
	    }
	};

	procedure = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ProcedureContext);
	    } else {
	        return this.getTypedRuleContext(ProcedureContext,i);
	    }
	};

	diagnosis = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DiagnosisContext);
	    } else {
	        return this.getTypedRuleContext(DiagnosisContext,i);
	    }
	};

	service = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ServiceContext);
	    } else {
	        return this.getTypedRuleContext(ServiceContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.enterListExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.exitListExpr(this);
		}
	}


}



class DateExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HIPMLParser.RULE_dateExpr;
    }

	DIFF_DAYS() {
	    return this.getToken(HIPMLParser.DIFF_DAYS, 0);
	};

	AND() {
	    return this.getToken(HIPMLParser.AND, 0);
	};

	variable = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VariableContext);
	    } else {
	        return this.getTypedRuleContext(VariableContext,i);
	    }
	};

	date = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DateContext);
	    } else {
	        return this.getTypedRuleContext(DateContext,i);
	    }
	};

	DIFF_MONTHS() {
	    return this.getToken(HIPMLParser.DIFF_MONTHS, 0);
	};

	DIFF_YEARS() {
	    return this.getToken(HIPMLParser.DIFF_YEARS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.enterDateExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.exitDateExpr(this);
		}
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HIPMLParser.RULE_variable;
    }

	VARIABLE() {
	    return this.getToken(HIPMLParser.VARIABLE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.exitVariable(this);
		}
	}


}



class DiagnosisContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HIPMLParser.RULE_diagnosis;
    }

	DIAGNOSIS() {
	    return this.getToken(HIPMLParser.DIAGNOSIS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.enterDiagnosis(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.exitDiagnosis(this);
		}
	}


}



class ProcedureContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HIPMLParser.RULE_procedure;
    }

	PROCEDURE() {
	    return this.getToken(HIPMLParser.PROCEDURE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.enterProcedure(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.exitProcedure(this);
		}
	}


}



class ServiceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HIPMLParser.RULE_service;
    }

	SERVICE() {
	    return this.getToken(HIPMLParser.SERVICE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.enterService(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.exitService(this);
		}
	}


}



class AmountContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HIPMLParser.RULE_amount;
    }

	AMOUNT() {
	    return this.getToken(HIPMLParser.AMOUNT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.enterAmount(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.exitAmount(this);
		}
	}


}



class DateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HIPMLParser.RULE_date;
    }

	DATE() {
	    return this.getToken(HIPMLParser.DATE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.enterDate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.exitDate(this);
		}
	}


}



class NumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HIPMLParser.RULE_number;
    }

	NUMBER() {
	    return this.getToken(HIPMLParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.exitNumber(this);
		}
	}


}



class StringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HIPMLParser.RULE_string;
    }

	STRING() {
	    return this.getToken(HIPMLParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.exitString(this);
		}
	}


}



class BoolContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HIPMLParser.RULE_bool;
    }

	BOOLEAN() {
	    return this.getToken(HIPMLParser.BOOLEAN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.enterBool(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HIPMLListener ) {
	        listener.exitBool(this);
		}
	}


}




HIPMLParser.PolicyContext = PolicyContext;
HIPMLParser.PolicySectionContext = PolicySectionContext;
HIPMLParser.AttributesSectionContext = AttributesSectionContext;
HIPMLParser.AttributesBodyContext = AttributesBodyContext;
HIPMLParser.AttributeContext = AttributeContext;
HIPMLParser.AttributeStringContext = AttributeStringContext;
HIPMLParser.AttributeDateContext = AttributeDateContext;
HIPMLParser.AttributeNumberContext = AttributeNumberContext;
HIPMLParser.CoverageSectionContext = CoverageSectionContext;
HIPMLParser.CoverageBodyContext = CoverageBodyContext;
HIPMLParser.CoverageItemContext = CoverageItemContext;
HIPMLParser.CoverageItemNameContext = CoverageItemNameContext;
HIPMLParser.CoverageItemDetailsContext = CoverageItemDetailsContext;
HIPMLParser.CoverageItemLimitContext = CoverageItemLimitContext;
HIPMLParser.CoverageItemConditionContext = CoverageItemConditionContext;
HIPMLParser.ExclusionsSectionContext = ExclusionsSectionContext;
HIPMLParser.ExclusionBodyContext = ExclusionBodyContext;
HIPMLParser.ExclusionItemContext = ExclusionItemContext;
HIPMLParser.ExclusionItemConditionContext = ExclusionItemConditionContext;
HIPMLParser.SwitchStmtContext = SwitchStmtContext;
HIPMLParser.SwitchExprContext = SwitchExprContext;
HIPMLParser.SwitchDefaultExprContext = SwitchDefaultExprContext;
HIPMLParser.BooleanExprContext = BooleanExprContext;
HIPMLParser.BooleanGroupExprStmtContext = BooleanGroupExprStmtContext;
HIPMLParser.ComparatorExprContext = ComparatorExprContext;
HIPMLParser.GroupFnExprContext = GroupFnExprContext;
HIPMLParser.NumberExprContext = NumberExprContext;
HIPMLParser.ListOpExprContext = ListOpExprContext;
HIPMLParser.ListContext = ListContext;
HIPMLParser.ListExprContext = ListExprContext;
HIPMLParser.DateExprContext = DateExprContext;
HIPMLParser.VariableContext = VariableContext;
HIPMLParser.DiagnosisContext = DiagnosisContext;
HIPMLParser.ProcedureContext = ProcedureContext;
HIPMLParser.ServiceContext = ServiceContext;
HIPMLParser.AmountContext = AmountContext;
HIPMLParser.DateContext = DateContext;
HIPMLParser.NumberContext = NumberContext;
HIPMLParser.StringContext = StringContext;
HIPMLParser.BoolContext = BoolContext;
