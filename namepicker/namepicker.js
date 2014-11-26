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
