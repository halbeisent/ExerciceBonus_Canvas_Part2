var logo = document.getElementById('e2nlogo');
var drawProcess = logo.getContext('2d');

// Utilisation du canvas Font
drawProcess.font = 'normal 250px Arial';
drawProcess.fillText('E', 30,410);
// Dessin du 2
drawProcess.beginPath();
drawProcess.moveTo(215,260);
drawProcess.bezierCurveTo(350,150,550,150,189,411)
drawProcess.lineTo(192,420);
drawProcess.lineTo(300,400);
drawProcess.strokeStyle = '#EA4E1D';
drawProcess.lineWidth = 10;
drawProcess.stroke();
drawProcess.fillText('N', 370,410);
drawProcess.font = '12px Arial';
drawProcess.fillStyle = '#B5B5B5';
// Canvas font pour le texte en dessous du N
drawProcess.fillText('École du numérique', 390,430)
drawProcess.fillText('du Noyonnais', 390,450)
// losange du haut
drawProcess.beginPath();
drawProcess.moveTo(603,245);
drawProcess.lineTo(613,255);
drawProcess.lineTo(613,265);
drawProcess.lineTo(603,275);
drawProcess.lineTo(593,265);
drawProcess.lineTo(593,255);
drawProcess.closePath();
drawProcess.fillStyle = '#EBEBEB';
drawProcess.fill();
// losange milieu gauche
drawProcess.beginPath();
drawProcess.moveTo(590,275);
drawProcess.lineTo(600,285);
drawProcess.lineTo(600,295);
drawProcess.lineTo(590,305);
drawProcess.lineTo(580,295);
drawProcess.lineTo(580,285);
drawProcess.closePath();
drawProcess.fillStyle = '#DBDADB';
drawProcess.fill();
// losange milieu droit
drawProcess.beginPath();
drawProcess.moveTo(615,275);
drawProcess.lineTo(625,285);
drawProcess.lineTo(625,295);
drawProcess.lineTo(615,305);
drawProcess.lineTo(605,295);
drawProcess.lineTo(605,285);
drawProcess.closePath();
drawProcess.fillStyle = '#595656';
drawProcess.fill();
// losange du bas
drawProcess.beginPath();
drawProcess.moveTo(603,305);
drawProcess.lineTo(613,315);
drawProcess.lineTo(613,325);
drawProcess.lineTo(603,335);
drawProcess.lineTo(593,325);
drawProcess.lineTo(593,315);
drawProcess.closePath();
drawProcess.fillStyle = '#EA4E1A';
drawProcess.fill();
// losange bas gauche
drawProcess.beginPath();
drawProcess.moveTo(590,335);
drawProcess.lineTo(600,345);
drawProcess.lineTo(600,355);
drawProcess.lineTo(590,365);
drawProcess.lineTo(580,355);
drawProcess.lineTo(580,345);
drawProcess.closePath();
drawProcess.fillStyle = '#DBDADB';
drawProcess.fill();
// losange bas droit
drawProcess.beginPath();
drawProcess.moveTo(615,335);
drawProcess.lineTo(625,345);
drawProcess.lineTo(625,355);
drawProcess.lineTo(615,365);
drawProcess.lineTo(605,355);
drawProcess.lineTo(605,345);
drawProcess.closePath();
drawProcess.fillStyle = '#595656';
drawProcess.fill();
