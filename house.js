Enter file contents hereexports.ETEGE2 = { 
2    
3   upStair: function( size, material ) { 
4     if( material == undefined ) { 
5       material = blocks.stairs.stone; 
6     } 
7     if( size > 50 ) { 
8       size = 50; 
9     } 
10     return box( material ).fwd().up().times( size ); 
11   }, 
12    
13   downStair: function( size, material ) { 
14     if( material == undefined ) { 
15       material = blocks.stairs.stone; 
16     } 
17     if( size > 50 ) { 
18       size = 50; 
19     } 
20     return box( material ).fwd().down().times( size ); 
21   } 
