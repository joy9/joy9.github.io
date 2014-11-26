var words = "中华心信星欣天创荣宇通锦轩威易鑫睿锐和酷龙成煜博航维道亚诺施万迈迪宜冠钜";
var names = "";

// use for directly.

// 2 words
for (var i = 0; i < words.length; i++)
	for (var j = 0; j < words.length; j++) {
		if (i != j) {
			names += words[i] + words[j] + "\r\n";
		}
	}

document.writeln("两字组合：");
document.writeln(names);
names = "";

// 3 words
for (var i = 0; i < words.length; i++)
	for (var j = 0; j < words.length; j++) 
		for (var k = 0; k < words.length; k++)
			if (i != j && j != k && i != k) {
				names += words[i] + words[j] + words[k] + "\r\n";
			}

document.writeln("三字组合：");
document.writeln(names);
names = "";

// 4 words
for (var i = 0; i < words.length; i++)
	for (var j = 0; j < words.length; j++) 
		for (var k = 0; k < words.length; k++) 
			for (var l = 0; l < words.length; l++)
				if (i != j && i != k && i != l && j != k && j != l && k != l) {
					names += words[i] + words[j] + words[k] + words[l] + "\r\n";
				}

document.writeln("四字组合：");
document.writeln(names);
names = "";
