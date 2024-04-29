function createTabungSectioned(radius, x0 ,y0, z0, section, red, green, blue){
    var vertex = [
    ];
    for(let i = 0;i<=section;i++){
        y = i*0.1;
        for(let j = 0; j <= 360; j++){
                var x = radius * Math.cos(LIBS.degToRad(j));//calculate the x component
                var z = radius * Math.sin(LIBS.degToRad(j));//calculate the y component
  
                vertex.push(x + x0, y+y0 ,z+z0, red, green, blue);//output vertex
  
            };
    };
  
  
    var faces = [
    ];
  
    for(let i = 0;i<section;i++){
        for(let j = 0;j<360;j++){
            x = j + i*361;
            y = j+1 + i*361;
            z = j+361 + i*361;
            faces.push(x,y,z);
           
            x = x+361;
            y = y+361;
            z = z-360;
            faces.push(x,y,z);
  
        }
    }
  
    for(let i = 0;i<359;i++){
        faces.push(0,i+1,i+2);
  
        var LastIndex=(vertex.length/6)-1;
        faces.push(LastIndex,LastIndex-i,LastIndex-i-1);
    }
  
  
    return [vertex, faces];
  }
  function bezierCurve(controlPoints, numPoints) {
    const points = [];
    for (let i = 0; i <= numPoints; i++) {
        const t = i / numPoints;
        const x = Math.pow(1 - t, 3) * controlPoints[0][0] + 
                  3 * Math.pow(1 - t, 2) * t * controlPoints[1][0] + 
                  3 * (1 - t) * Math.pow(t, 2) * controlPoints[2][0] + 
                  Math.pow(t, 3) * controlPoints[3][0];
        const y = x; // Using x-coordinate as the y-coordinate
        points.push([x, y]);
    }
    return points;
  }
  function createTabungSectionedBadan(radius, x0 ,y0, z0, section, red, green, blue){
    var vertex = [
    ];
    
    var temp;
  
    var kurvaBadan = bezierCurve([[radius],[radius+0.2],[radius+0.2],[radius]],section);
  
    console.log(kurvaBadan);
    for(let i = 0;i<=section;i++){
        y = i*0.025;
        temp = kurvaBadan[i];
        for(let j = 0; j <= 360; j++){
                var x = temp[0] * Math.cos(LIBS.degToRad(j));//calculate the x component
                var z = radius * Math.sin(LIBS.degToRad(j));//calculate the y component
  
                vertex.push(x + x0, y+y0 ,z+z0, red, green, blue);//output vertex
  
            };
    };
  
  
    var faces = [
    ];
  
    for(let i = 0;i<section;i++){
        for(let j = 0;j<360;j++){
            x = j + i*361;
            y = j+1 + i*361;
            z = j+361 + i*361;
            faces.push(x,y,z);
           
            x = x+361;
            y = y+361;
            z = z-360;
            faces.push(x,y,z);
  
        }
    }
  
    for(let i = 0;i<359;i++){
        faces.push(0,i+1,i+2);
  
        var LastIndex=(vertex.length/6)-1;
        faces.push(LastIndex,LastIndex-i,LastIndex-i-1);
    }
  
  
    return [vertex, faces];
  }


  function createTabungSectionedHalfKiri(radius, x0, y0, z0, section, red, green, blue) {
    var vertex = [];
    var faces = [];
  
    for (let i = 0; i <= section; i++) {
        y = i * 0.1;
        for (let j = 90; j <= 270; j++) { // Mengubah batas sudut hanya hingga 180 derajat
            var x = radius * Math.cos(LIBS.degToRad(j)); // Hitung komponen x
            var z = radius * Math.sin(LIBS.degToRad(j)); // Hitung komponen z
  
            vertex.push(x + x0, y + y0, z + z0, red, green, blue); // Tambahkan vertex
        }
    }
  
    for (let i = 0; i < section; i++) {
        for (let j = 0; j < 180; j++) { // Mengubah batas sudut hanya hingga 180 derajat
            x = j + i * 181; // Ubah penyesuaian indeks
            y = j + 1 + i * 181; // Ubah penyesuaian indeks
            z = j + 181 + i * 181; // Ubah penyesuaian indeks
            faces.push(x, y, z);
  
            x = x + 181;
            y = y + 181;
            z = z - 180;
            faces.push(x, y, z);
        }
    }
  
    for (let i = 0; i < 179; i++) { // Mengubah batas iterasi
        faces.push(0, i + 1, i + 2); // Tambahkan wajah
        var LastIndex = (vertex.length / 6) - 1;
        faces.push(LastIndex, LastIndex - i, LastIndex - i - 1);
    }
  
    return [vertex, faces];
  }
  
  // function createBalok()
  
  function createTabungSectionedHalfKanan(radius, x0, y0, z0, section, red, green, blue) {
    var vertex = [];
    var faces = [];
  
    for (let i = 0; i <= section; i++) {
        y = i * 0.1;
        for (let j = -90; j <= 90; j++) { // Mengubah batas sudut hanya hingga 180 derajat
            var x = radius * Math.cos(LIBS.degToRad(j)); // Hitung komponen x
            var z = radius * Math.sin(LIBS.degToRad(j)); // Hitung komponen z
  
            vertex.push(x + x0, y + y0, z + z0, red, green, blue); // Tambahkan vertex
        }
    }
  
    for (let i = 0; i < section; i++) {
        for (let j = 0; j < 180; j++) { // Mengubah batas sudut hanya hingga 180 derajat
            x = j + i * 181; // Ubah penyesuaian indeks
            y = j + 1 + i * 181; // Ubah penyesuaian indeks
            z = j + 181 + i * 181; // Ubah penyesuaian indeks
            faces.push(x, y, z);
  
            x = x + 181;
            y = y + 181;
            z = z - 180;
            faces.push(x, y, z);
        }
    }
  
    for (let i = 0; i < 179; i++) { // Mengubah batas iterasi
        faces.push(0, i + 1, i + 2); // Tambahkan wajah
        var LastIndex = (vertex.length / 6) - 1;
        faces.push(LastIndex, LastIndex - i, LastIndex - i - 1);
    }
  
    return [vertex, faces];
  }
  
  
  function createSphere(x, y, z, radius, segments, leftColor, rightColor) {
    var vertices = [];
    var colors = [];
    
    var angleIncrement = (Math.PI) / segments;
    
    for (var i = 0; i <= segments; i++) { // Loop untuk latitude (paralel)
        var latAngle = Math.PI * (-0.5 + (i / segments)); // Mulai dari -π/2 dan berakhir di 0
        var sinLat = Math.sin(latAngle);
        var cosLat = Math.cos(latAngle);
    
        for (var j = 0; j <= segments; j++) { // Loop untuk longitude (meridian)
            var lonAngle = 2 * Math.PI * (j / segments); // Loop dari 0 ke 2π
            var sinLon = Math.sin(lonAngle);
            var cosLon = Math.cos(lonAngle);
    
            var xCoord = cosLon * cosLat;
            var yCoord = sinLon * cosLat;
            var zCoord = sinLat;
    
            var vertexX = x + radius * xCoord;
            var vertexY = y + radius * yCoord;
            var vertexZ = z + radius * zCoord;
  
            // Memisahkan bola menjadi dua bagian
            var color;
            if (xCoord >= 0) { // Bagian kanan
                color = rightColor;
            } else { // Bagian kiri
                color = leftColor;
            }
    
            vertices.push(vertexX, vertexY, vertexZ);
            vertices.push(color[0], color[1], color[2]);
        }
    }
    
    var faces = [];
    for (var i = 0; i < segments; i++) {
        for (var j = 0; j < segments; j++) {
            var index = i * (segments + 1) + j;
            var nextIndex = index + segments + 1;
    
            faces.push(index, nextIndex, index + 1);
            faces.push(nextIndex, nextIndex + 1, index + 1);
        }
    }
    
    return [vertices, faces];
  }
  

  function createEllipsoid(radiusWidth, radiusHeight, radiusDepth, x0, y0, z0, red, green, blue){
    var vertexArray = [];
    var facesArray = [];
    var uSteps = 30;
    var vSteps = 30;
  
    for(var u = 0; u <= uSteps; u++){
        for(var v = 0; v <= vSteps; v++){
            var thetaU = (u/uSteps) * Math.PI * 2;
            var thetaV = (v/vSteps) * Math.PI;
  
            var x = x0 + (radiusWidth * Math.cos(thetaU) * Math.sin(thetaV));
            var y = y0 + (radiusHeight * Math.sin(thetaU) * Math.sin(thetaV));
            var z = z0 + (radiusDepth * Math.cos(thetaV));
  
            vertexArray.push(x, y, z, red, green, blue);
  
            if(u < uSteps && v < vSteps){
                var first = (u * (vSteps + 1)) + v;
                var second = first + vSteps + 1;
  
                facesArray.push(first, second, first + 1);
                facesArray.push(second, second + 1, first + 1);
            }
        }
    }
  
    return [vertexArray, facesArray];
  }
  
  
  function createCone(radius, height, x0, y0, z0, segments) {
    var vertices = [];
    var indices = [];
    var angleIncrement = (2 * Math.PI) / segments;
    
    // Loop untuk setiap segmen pada setengah cone
    for (var i = 0; i < segments; i++) {
        var theta = i * angleIncrement;
        var x = radius * Math.cos(theta);
        var z = radius * Math.sin(theta);
        
        var color;
        if (x <= 0) { // Bagian kiri
            color = [0.4, 0.4, 0.4]; // Warna abu-abu
        } else { // Bagian kanan
            color = [255, 255, 255]; // Warna putih
        }
        
        vertices.push(x + x0, y0, z + z0);
        vertices.push(color[0], color[1], color[2]);
        
        // Menentukan indeks untuk membentuk segitiga
        if (i < segments - 1) {
            indices.push(i, segments, i + 1);
        } else {
            indices.push(i, segments, 0);
        }
    }
  
    
    
    var topColor = [0.4, 0.4, 0.4]; // Warna putih secara default
      if (vertices[0] <= 0) { // Jika sisi kiri lebih dominan
          topColor = [0, 0, 0]; // Warna abu-abu
      }
      
      // Menambahkan titik puncak
      vertices.push(x0, y0 + height, z0);
      vertices.push(topColor[0], topColor[1], topColor[2]); 
      
      return [vertices, indices];
  }
  
  
  function normalizeScreen(x,y,width,height){
    var nx = 2*x/width - 1
    var ny = -2*y/height + 1
   
    return [nx,ny]
  }
   
  function generateBSpline(controlPoint, m, degree){
    var curves = [];
    var knotVector = []
   
    var n = controlPoint.length/2;
   
   
    // Calculate the knot values based on the degree and number of control points
    for (var i = 0; i < n + degree+1; i++) {
      if (i < degree + 1) {
        knotVector.push(0);
      } else if (i >= n) {
        knotVector.push(n - degree);
      } else {
        knotVector.push(i - degree);
      }
    }
   
   
    var basisFunc = function(i,j,t){
        if (j == 0){
          if(knotVector[i] <= t && t<(knotVector[(i+1)])){
            return 1;
          }else{
            return 0;
          }
        }
   
        var den1 = knotVector[i + j] - knotVector[i];
        var den2 = knotVector[i + j + 1] - knotVector[i + 1];
   
        var term1 = 0;
        var term2 = 0;
   
   
        if (den1 != 0 && !isNaN(den1)) {
          term1 = ((t - knotVector[i]) / den1) * basisFunc(i,j-1,t);
        }
   
        if (den2 != 0 && !isNaN(den2)) {
          term2 = ((knotVector[i + j + 1] - t) / den2) * basisFunc(i+1,j-1,t);
        }
   
        return term1 + term2;
    }
  
   
    for(var t=0;t<m;t++){
      var x=0;
      var y=0;
   
      var u = (t/m * (knotVector[controlPoint.length/2] - knotVector[degree]) ) + knotVector[degree] ;
   
      //C(t)
      for(var key =0;key<n;key++){
   
        var C = basisFunc(key,degree,u);
        console.log(C);
        x+=(controlPoint[key*2] * C);
        y+=(controlPoint[key*2+1] * C);
        console.log(t+" "+degree+" "+x+" "+y+" "+C);
      }
      curves.push(x);
      curves.push(y);
   
    }
    console.log(curves)
    return curves;
  }
  function createConeSam(radius, height, x0, y0, z0, segments, red, green, blue) {
    var vertices = [];
    var indices = [];


    var angleIncrement = (2 * Math.PI) / segments;


    // Basis lingkaran kerucut
    for (var i = 0; i < segments; i++) {
        var theta = i * angleIncrement;
        var x = radius * Math.cos(theta);
        var z = radius * Math.sin(theta);


        // Vertex
        vertices.push(x + x0, y0, z + z0);


        // Warna
        vertices.push(red, green, blue);


        // Indices untuk menggambar wajah (faces)
        if (i < segments - 1) {
            indices.push(i, segments, i + 1); // Menghubungkan setiap titik basis dengan titik puncak
        } else {
            indices.push(i, segments, 0); // Menghubungkan titik terakhir di lingkaran dengan titik awal untuk menutup kerucut
        }
    }

    // Puncak kerucut
    vertices.push(x0, y0 + height, z0);
    vertices.push(red, green, blue); // Warna puncak sama dengan warna basis


    return [vertices, indices];
}
function createRectangularPrism(width, height, depth, x0, y0, z0, red, green, blue) {
    var vertexArray = [];
    var facesArray = [];
  
    // Titik-titik balok
    var vertices = [
        [-width/2, -height/2, -depth/2],
        [-width/2, -height/2, depth/2],
        [-width/2, height/2, -depth/2],
        [-width/2, height/2, depth/2],
        [width/2, -height/2, -depth/2],
        [width/2, -height/2, depth/2],
        [width/2, height/2, -depth/2],
        [width/2, height/2, depth/2]
    ];
  
    // Menambahkan titik-titik ke vertexArray dengan warna yang sama
    for (var i = 0; i < vertices.length; i++) {
        var x = vertices[i][0] + x0;
        var y = vertices[i][1] + y0;
        var z = vertices[i][2] + z0;
        vertexArray.push(x, y, z, red, green, blue);
    }
  
    // Menambahkan wajah balok
    var faces = [
        [0, 1, 3, 2], // Depan
        [4, 5, 7, 6], // Belakang
        [0, 1, 5, 4], // Kiri
        [2, 3, 7, 6], // Kanan
        [0, 2, 6, 4], // Bawah
        [1, 3, 7, 5]  // Atas
    ];
  
    // Menambahkan indeks wajah ke facesArray
    for (var i = 0; i < faces.length; i++) {
        var face = faces[i];
        facesArray.push(face[0], face[1], face[2]);
        facesArray.push(face[0], face[2], face[3]);
    }
  
    return [vertexArray, facesArray];
  }
  
  function createRectangularDiagonal(width, height, depth, x0, y0, z0, red, green, blue, degree) {
    var vertexArray = [];
    var facesArray = [];
  
    // Titik-titik balok
    var vertices = [
        [-width/2, -height/2, -depth/2],
        [-width/2, -height/2, depth/2],
        [-width/2, height/2, -depth/2],
        [-width/2, height/2, depth/2],
        [width/2, -height/2, -depth/2],
        [width/2, -height/2, depth/2],
        [width/2, height/2, -depth/2],
        [width/2, height/2, depth/2]
    ];
  
    // Menambahkan titik-titik ke vertexArray dengan warna yang sama
    for (var i = 0; i < vertices.length; i++) {
        var x = vertices[i][0] + x0;
        var y = vertices[i][1] + y0;

        x = (x-x0)*Math.cos(degree) - (y-y0)*-Math.sin(degree) + x0;
        y = (x-x0)*Math.sin(degree) - (y-y0)*Math.cos(degree) + y0;
        var z = vertices[i][2] + z0;
        vertexArray.push(x, y, z, red, green, blue);
    }
  
    // Menambahkan wajah balok
    var faces = [
        [0, 1, 3, 2], // Depan
        [4, 5, 7, 6], // Belakang
        [0, 1, 5, 4], // Kiri
        [2, 3, 7, 6], // Kanan
        [0, 2, 6, 4], // Bawah
        [1, 3, 7, 5]  // Atas
    ];
  
    // Menambahkan indeks wajah ke facesArray
    for (var i = 0; i < faces.length; i++) {
        var face = faces[i];
        facesArray.push(face[0], face[1], face[2]);
        facesArray.push(face[0], face[2], face[3]);
    }
  
    return [vertexArray, facesArray];
  }



function createPyramid(baseWidth, height, x0, y0, z0, red, green, blue) {
    var vertexArray = [];
    var facesArray = [];
  
    // Titik-titik piramida
    var vertices = [
        // Base
        [-baseWidth/2, -height/2, -baseWidth/2],
        [-baseWidth/2, -height/2, baseWidth/2],
        [baseWidth/2, -height/2, baseWidth/2],
        [baseWidth/2, -height/2, -baseWidth/2],
        // Apex
        [0, height/2, 0]
    ];
  
    // Menambahkan titik-titik ke vertexArray dengan warna yang sama
    for (var i = 0; i < vertices.length; i++) {
        var x = vertices[i][0] + x0;
        var y = vertices[i][1] + y0;
        var z = vertices[i][2] + z0;
        vertexArray.push(x, y, z, red, green, blue);
    }
  
    // Menambahkan wajah piramida
    var faces = [
        [0, 1, 4], // Triangle 1
        [1, 2, 4], // Triangle 2
        [2, 3, 4], // Triangle 3
        [3, 0, 4], // Triangle 4
        [0, 1, 2, 3] // Base
    ];
  
    // Menambahkan indeks wajah ke facesArray
    for (var i = 0; i < faces.length; i++) {
        var face = faces[i];
        facesArray.push(face[0], face[1], face[2]);
    }
  
    return [vertexArray, facesArray];
  }

  function bezierCurve2(controlPoints, numPoints) {
    const points = [];
    for (let i = 0; i <= numPoints; i++) {
        const t = i / numPoints;
        const x = Math.pow(1 - t, 3) * controlPoints[0][0] + 
                  3 * Math.pow(1 - t, 2) * t * controlPoints[1][0] + 
                  3 * (1 - t) * Math.pow(t, 2) * controlPoints[2][0] + 
                  Math.pow(t, 3) * controlPoints[3][0];
                const y = Math.pow(1 - t, 3) * controlPoints[0][1] + 
                3 * Math.pow(1 - t, 2) * t * controlPoints[1][1] + 
            3 * (1 - t) * Math.pow(t, 2) * controlPoints[2][1] + 
            Math.pow(t, 3) * controlPoints[3][1];
            points.push([x, y]);
    }
    return points;
}

function createBezierRectangularPrism(x0, y0, x1, y1, x2, y2, x3, y3, z0, red, green, blue, section) {
    var vertex = [];
    var faces = [];

    // Generate bezier curve points
    var bezierCurvePoints = bezierCurve2([[x0, y0], [x1, y1], [x2, y2], [x3, y3]], section);

    // Generate vertices based on the bezier curve points
    for (let i = 0; i <= section; i++) {
        var x = bezierCurvePoints[i][0]; // x-coordinate from the bezier curve
        var y = bezierCurvePoints[i][1]; // y-coordinate from the bezier curve

        // Push vertices
        vertex.push(x, y, z0, red, green, blue); // Top vertex
        vertex.push(x, y - 0.05, z0, red, green, blue); // Bottom vertex
    }

    // Generate faces
    for (let i = 0; i < section; i++) {
        var startIndex = i * 2;
        faces.push(startIndex, startIndex + 1, startIndex + 3);
        faces.push(startIndex, startIndex + 3, startIndex + 2);
    }

    return [vertex, faces];
}

  function createSphereNando(x, y, z, radius, segments, red, green, blue) {
    var vertices = [];
    var colors = [];
    
    
    var angleIncrement = (2 * Math.PI) / segments;
    
    
    for (var i = 0; i <= segments; i++) { // Mengubah batas atas iterasi
        var latAngle = Math.PI * (-0.5 + (i / segments));
        var sinLat = Math.sin(latAngle);
        var cosLat = Math.cos(latAngle);
    
        for (var j = 0; j <= segments; j++) {
            var lonAngle = 2 * Math.PI * (j / segments);
            var sinLon = Math.sin(lonAngle);
            var cosLon = Math.cos(lonAngle);
    
            var xCoord = cosLon * cosLat;
            var yCoord = sinLon * cosLat;
            var zCoord = sinLat;
    
            var vertexX = x + radius * xCoord;
            var vertexY = y + radius * yCoord;
            var vertexZ = z + radius * zCoord;
    
            vertices.push(vertexX, vertexY, vertexZ);
            vertices.push(red, green, blue);
        }
    }
    
    var faces = [];
    for (var i = 0; i < segments; i++) {
      for (var j = 0; j < segments; j++) {
        var index = i * (segments + 1) + j;
        var nextIndex = index + segments + 1;
    
        faces.push(index, nextIndex, index + 1);
        faces.push(nextIndex, nextIndex + 1, index + 1);
      }
    }
    
    
    return [vertices, faces];
    }
  
  
  var GL;
  class myObject{
    child=[];
    object_vertex = [];
    OBJECT_VERTEX = GL.createBuffer();
    object_faces = [];
    OBJECT_FACES = GL.createBuffer();
   
    shader_vertex_source=`
    attribute vec3 position;
    attribute vec3 color;
  
  
    uniform mat4 Pmatrix;
    uniform mat4 Vmatrix;
    uniform mat4 Mmatrix;
   
    varying vec3 vColor;
    void main(void) {
        gl_Position = Pmatrix * Vmatrix * Mmatrix * vec4(position,1.0);
        gl_PointSize = 20.0;
        vColor = color;
    }`;
    shader_fragment_source = `
    precision mediump float;
    varying vec3 vColor;
    void main(void) {
        gl_FragColor = vec4(vColor,1.0);
    }`;
    compile_shader = function(source, type, typeString) {
        var shader = GL.createShader(type);
        GL.shaderSource(shader, source);
        GL.compileShader(shader);
        if (!GL.getShaderParameter(shader, GL.COMPILE_STATUS)) {
            alert("ERROR IN " + typeString + " SHADER: "
            + GL.getShaderInfoLog(shader));
            return false;
        }
        return shader;
    };
  
  
    shader_vertex;
    shader_fragment;
    SHADER_PROGRAM;
    _Pmatrix;
    _Vmatrix;
    _Mmatrix;
    _color;
    _position;
    MOVEMATRIX = LIBS.get_I4();
    constructor(object_vertex, object_faces, shader_vertex_source, shader_fragment_source){
        this.object_vertex=object_vertex;
        this.object_faces=object_faces;
        this.shader_vertex_source=shader_vertex_source;
        this.shader_fragment_source=shader_fragment_source;
        this.shader_vertex = this.compile_shader(this.shader_vertex_source,GL.VERTEX_SHADER, "VERTEX");
        this.shader_fragment = this.compile_shader(this.shader_fragment_source,GL.FRAGMENT_SHADER, "FRAGMENT");
        this.SHADER_PROGRAM = GL.createProgram();
        GL.attachShader(this.SHADER_PROGRAM, this.shader_vertex);
        GL.attachShader(this.SHADER_PROGRAM, this.shader_fragment);
        GL.linkProgram(this.SHADER_PROGRAM);
        this._Pmatrix = GL.getUniformLocation(this.SHADER_PROGRAM,"Pmatrix");
        this._Vmatrix = GL.getUniformLocation(this.SHADER_PROGRAM,"Vmatrix");
        this._Mmatrix = GL.getUniformLocation(this.SHADER_PROGRAM,"Mmatrix");
        this._color = GL.getAttribLocation(this.SHADER_PROGRAM, "color");
        this._position = GL.getAttribLocation(this.SHADER_PROGRAM, "position");
        GL.enableVertexAttribArray(this._color);
        GL.enableVertexAttribArray(this._position);
        GL.useProgram(this.SHADER_PROGRAM);
        this.initializeObject();
    }
    setUniform4(PROJMATRIX, VIEWMATRIX){
        GL.useProgram(this.SHADER_PROGRAM);
        GL.uniformMatrix4fv(this._Pmatrix,false,PROJMATRIX);
        GL.uniformMatrix4fv(this._Vmatrix,false,VIEWMATRIX);
        GL.uniformMatrix4fv(this._Mmatrix,false,this.MOVEMATRIX);
    }
   
    draw(){
        GL.useProgram(this.SHADER_PROGRAM);
        GL.bindBuffer(GL.ARRAY_BUFFER, this.OBJECT_VERTEX);
  
  
            GL.vertexAttribPointer(this._position,3,GL.FLOAT,false,4*(3+3),0);
            GL.vertexAttribPointer(this._color,3,GL.FLOAT,false,4*(3+3),4*3);
  
  
            GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, this.OBJECT_FACES);
            GL.drawElements(GL.TRIANGLES, this.object_faces.length,GL.UNSIGNED_SHORT,0);
            for(var i=0;i<this.child.length;i++){
                this.child[i].draw();
            }
    }
    addchild(child){
        this.child.push(child);
    }
  
  
    addChilds(child) {
      child.forEach(obj => {
        this.child.push(obj);
      });
    }

  
  
    initializeObject(){
        GL.bindBuffer(GL.ARRAY_BUFFER, this.OBJECT_VERTEX);
        GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(this.object_vertex), GL.STATIC_DRAW);
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, this.OBJECT_FACES);
        GL.bufferData(GL.ELEMENT_ARRAY_BUFFER,new Uint16Array(this.object_faces),GL.STATIC_DRAW);
  
  
    }
    
  
  }
  function main() {
    
    var CANVAS = document.getElementById("mycanvas");
    CANVAS.width = window.innerWidth;
    CANVAS.height = window.innerHeight;
    var AMORIZATION = 0.95;
    var x_prev, y_prev;
    var drag = false;
    var THETA=0;
    var PHI=0;
    var dX=0,dY=0;
    var mouseDown = function(e) {
        drag = true;
        x_prev = e.pageX;
        y_prev = e.pageY;
        e.preventDefault();
        return false;
    }
  
  
    var mouseUp = function(e) {
        drag = false;
    }
  
  
    var mouseMove = function(e) {
        if(!drag) return false;
  
  
        dX = (e.pageX - x_prev)* 2 * Math.PI / CANVAS.width;
        dY = (e.pageY - y_prev)* 2 * Math.PI / CANVAS.height;
        THETA += dX;
        PHI += dY;
        x_prev = e.pageX;
        y_prev = e.pageY;
        e.preventDefault();
    }
    // Event listener untuk menangkap input keyboard
  window.addEventListener('keydown', function(e) {
    // Mendapatkan kode tombol yang ditekan
    var keyCode = e.keyCode;
  
    // Sesuaikan rotasi berdasarkan tombol yang ditekan
    switch(keyCode) {
        case 87: // W key
            PHI -= 0.1; // Rotasi ke atas
            break;
        case 65: // A key
            THETA -= 0.1; // Rotasi ke kiri
            break;
        case 83: // S key
            PHI += 0.1; // Rotasi ke bawah
            break;
        case 68: // D key
            THETA += 0.1; // Rotasi ke kanan
            break;
        default:
            break;
    }
  });
  
  
    CANVAS.addEventListener('mousedown',mouseDown, false);
    CANVAS.addEventListener('mouseup', mouseUp, false);
    CANVAS.addEventListener('mouseout',mouseUp, false);
    CANVAS.addEventListener('mousemove',mouseMove, false);
  
  
  
  
   
    try {
        GL = CANVAS.getContext("webgl", {antialias: false})
    } catch (error) {
        alert("WebGL context cannot be initialized");
        return false;
    }
   
   
    //SHADER
    var shader_vertex_source=`
    attribute vec3 position;
    attribute vec3 color;
  
  
    uniform mat4 Pmatrix;
    uniform mat4 Vmatrix;
    uniform mat4 Mmatrix;
   
    varying vec3 vColor;
    void main(void) {
        gl_Position = Pmatrix * Vmatrix * Mmatrix * vec4(position,1.0);
        gl_PointSize = 20.0;
        vColor = color;
    }`;
    var shader_fragment_source = `
    precision mediump float;
    varying vec3 vColor;
    void main(void) {
        gl_FragColor = vec4(vColor,1.0);
    }`;
  
 
        //==========================================KARAKTER ACA=====================================
        //========KEPALA=========
        var sphere = [];
        sphere = createSphere(0, 0.7, 0, 1.1, 255, [0.4, 0.4, 0.4], [255,255,255]);
        var sphere_vertex = sphere[0];
        var sphere_faces = sphere[1];
        var aca1 =new myObject(sphere_vertex,sphere_faces,shader_vertex_source,shader_fragment_source);
  
        var sphere2 = [];
        sphere2 = createCone(0.5,1,0,1.2,0,255);
        var sphere_vertex2 = sphere2[0];
        var sphere_faces2 = sphere2[1];
  
        var object2 =new myObject(sphere_vertex2,sphere_faces2,shader_vertex_source,shader_fragment_source);
        aca1.addchild(object2);
  
        //==================MATA====================
        var circle1_vertex = [];
        circle1_vertex.push(0.33,0.7,   1.13);
        circle1_vertex.push(0,0,0);
        for (let i = 0; i <= 360; i++) {
            circle1_vertex.push(0.33 + 0.160 * Math.cos(i/Math.PI));
            circle1_vertex.push(0.7+0.160 * Math.sin(i/Math.PI));
            circle1_vertex.push(1.13);
            circle1_vertex.push(0);
            circle1_vertex.push(0);
            circle1_vertex.push(0);
        }
        var circle1_faces = [];
        for (let i = 0; i < 360; i++) {
            circle1_faces.push(0,i,i+1);
        }
        var mata_kiri = new myObject(circle1_vertex, circle1_faces, shader_vertex_source, shader_fragment_source);
          aca1.addchild(mata_kiri)
  
          var circle2_vertex = [];
          circle2_vertex.push(0.33,0.7,1.131);
          circle2_vertex.push(1,1,1);
          for (let i = 0; i <= 360; i++) {
              circle2_vertex.push(0.33 + 0.1 * Math.cos(i/Math.PI));
              circle2_vertex.push(0.7+0.1 * Math.sin(i/Math.PI));
              circle2_vertex.push(1.131);
              circle2_vertex.push(1);
              circle2_vertex.push(1);
              circle2_vertex.push(1);
          }
          var circle2_faces = [];
          for (let i = 0; i < 360; i++) {
              circle2_faces.push(0,i,i+1);
          }
          var mata_kiri_bawah = new myObject(circle2_vertex, circle2_faces, shader_vertex_source, shader_fragment_source);
          aca1.addchild(mata_kiri_bawah);
          
          var mata_kanan_temp1 = [];
          mata_kanan_temp1=createRectangularDiagonal(0.6,0.2,0,-0.3,0.7,1.1,0,0,0,45);
          var mata_kanan_vertex1 = mata_kanan_temp1[0];
          var mata_kanan_faces1 = mata_kanan_temp1[1];
    
          var mata_kanan1 =new myObject(mata_kanan_vertex1,mata_kanan_faces1,shader_vertex_source,shader_fragment_source);
          aca1.addchild(mata_kanan1);

          var mata_kanan_temp2 = [];
          mata_kanan_temp2=createRectangularDiagonal(0.6,0.2,0,-0.3,0.7,1.1,0,0,0,-45);
          var mata_kanan_vertex2 = mata_kanan_temp2[0];
          var mata_kanan_faces2 = mata_kanan_temp2[1];
    
          var mata_kanan2 =new myObject(mata_kanan_vertex2,mata_kanan_faces2,shader_vertex_source,shader_fragment_source);
          aca1.addchild(mata_kanan2);

          //============MULUT===========
          var mulut_temp = [];
          mulut_temp = createBezierRectangularPrism(-0.15-0.18, -0.05+0.5, -0.2, 0.4, 0.2, 0.4, 0.15+0.18, -0.05+0.5, 1.3, 0, 0, 0, 100);
          var mulut_vertex = mulut_temp[0];
          var mulut_faces = mulut_temp[1];
          var mulut = new myObject(mulut_vertex, mulut_faces, shader_vertex_source, shader_fragment_source);
          aca1.addchild(mulut);

        //========BADAN==========
        var badan_temp = [];
        badan_temp = createTabungSectionedHalfKiri(0.6,0,-1.45,0,15,0.4,0.4,0.4);
        var badan_vertex = badan_temp[0];
        var badan_faces = badan_temp[1];
  
        var badan =new myObject(badan_vertex,badan_faces,shader_vertex_source,shader_fragment_source);
        aca1.addchild(badan);
  
        var badan_temp_kanan = [];
        badan_temp_kanan = createTabungSectionedHalfKanan(0.6,0,-1.45,0,15,255,255,255);
        var badan_vertex_kanan = badan_temp_kanan[0];
        var badan_faces_kanan = badan_temp_kanan[1];
  
        var badan_kanan =new myObject(badan_vertex_kanan,badan_faces_kanan,shader_vertex_source,shader_fragment_source);
        aca1.addchild(badan_kanan);
  
        //=======KAKI KIRI========
        var kaki_kiri_temp = [];
        kaki_kiri_temp = createTabungSectioned(0.25,-0.25,-2.2,0,15,0.4,0.4,0.4);
        var kaki_kiri_vertex = kaki_kiri_temp[0];
        var kaki_kiri_faces = kaki_kiri_temp[1];
  
        var kaki_kiri =new myObject(kaki_kiri_vertex,kaki_kiri_faces,shader_vertex_source,shader_fragment_source);
        aca1.addchild(kaki_kiri);
  
        var telapak_kiri_temp = [];
        telapak_kiri_temp = createEllipsoid(0.3,0.1,0.3,-0.25,-2.25,0,0.4,0.4,0.4);
        var telapak_kiri_vertex = telapak_kiri_temp[0];
        var telapak_kiri_faces = telapak_kiri_temp[1];
  
        var telapak_kiri =new myObject(telapak_kiri_vertex,telapak_kiri_faces,shader_vertex_source,shader_fragment_source);
        aca1.addchild(telapak_kiri);
  
        //=======KAKI KANAN========
        var kaki_kanan_temp = [];
        kaki_kanan_temp = createTabungSectioned(0.25,0.25,-2.2,0,15,255,255,255);
        var kaki_kanan_vertex = kaki_kanan_temp[0];
        var kaki_kanan_faces = kaki_kanan_temp[1];
  
        var kaki_kanan =new myObject(kaki_kanan_vertex,kaki_kanan_faces,shader_vertex_source,shader_fragment_source);
        aca1.addchild(kaki_kanan);
  
        var telapak_kanan_temp = [];
        telapak_kanan_temp = createEllipsoid(0.3,0.1,0.3,0.25,-2.25,0,255,255,255);
        var telapak_kanan_vertex = telapak_kanan_temp[0];
        var telapak_kanan_faces = telapak_kanan_temp[1];
  
        var telapak_kanan =new myObject(telapak_kanan_vertex,telapak_kanan_faces,shader_vertex_source,shader_fragment_source);
        aca1.addchild(telapak_kanan);
  
        //========TANGAN KIRI=========
        var tangan_kiri_temp = [];
        tangan_kiri_temp = createEllipsoid(0.3,0.8,0.2,-0.7,-0.6,0,0.4,0.4,0.4);
        var tangan_kiri_vertex = tangan_kiri_temp[0];
        var tangan_kiri_faces = tangan_kiri_temp[1];
  
        var tangan_kiri =new myObject(tangan_kiri_vertex,tangan_kiri_faces,shader_vertex_source,shader_fragment_source);
        aca1.addchild(tangan_kiri);
  
        //========TANGAN KANAN=========
        var tangan_kanan_temp = [];
        tangan_kanan_temp = createEllipsoid(0.3,0.8,0.2,0.7,-0.6,0,255,255,255);
        var tangan_kanan_vertex = tangan_kanan_temp[0];
        var tangan_kanan_faces = tangan_kanan_temp[1];
  
        var tangan_kanan =new myObject(tangan_kanan_vertex,tangan_kanan_faces,shader_vertex_source,shader_fragment_source);
        aca1.addchild(tangan_kanan);





        //============================================KARAKTER NANDO=======================================================
        //========KEPALA=========
        var sphere = [];
        sphere = createSphereNando(0, 1, 0, 1.15, 100, 1, 1, 1);
        var sphere_vertex = sphere[0];
        var sphere_faces = sphere[1];
        var nando1 = new myObject(sphere_vertex,sphere_faces,shader_vertex_source,shader_fragment_source);

        //=========TELINGA KIRI=========
        var telingaKiri= [];
        telingaKiri = createEllipsoid(0.2,1.25,0.1,-0.25,1.75,0,1,1,1);
        var telingaKiri_vertex = telingaKiri[0];
        var telingaKiri_faces = telingaKiri[1];
        var nando2 = new myObject(telingaKiri_vertex, telingaKiri_faces, shader_vertex_source,shader_fragment_source);
        nando1.addchild(nando2);

        var telingaKiriPink= [];
        telingaKiriPink = createEllipsoid(0.125,1.05,0.1,-0.25,1.75,0.05,1,0.7137,0.7569);
        var telingaKiriPink_vertex = telingaKiriPink[0];
        var telingaKiriPink_faces = telingaKiriPink[1];
        var nando21 = new myObject(telingaKiriPink_vertex, telingaKiriPink_faces, shader_vertex_source,shader_fragment_source);
        nando1.addchild(nando21);

        //========TELINGA KANAN=========
        var telingaKanan= [];
        telingaKanan = createEllipsoid(0.2,1.25,0.1,0.25,1.75,0,1,1,1);
        var telingaKanan_vertex = telingaKanan[0];
        var telingaKanan_faces = telingaKanan[1];
        var nando3 = new myObject(telingaKanan_vertex, telingaKanan_faces, shader_vertex_source,shader_fragment_source);
        nando1.addchild(nando3);
        
        var telingaKananPink= [];
        telingaKananPink = createEllipsoid(0.125,1.05,0.1,0.25,1.75,0.05,1,0.7137,0.7569);
        var telingaKananPink_vertex = telingaKananPink[0];
        var telingaKananPink_faces = telingaKananPink[1];
        var nando31 = new myObject(telingaKananPink_vertex, telingaKananPink_faces, shader_vertex_source,shader_fragment_source);
        nando1.addchild(nando31);
        
        //========TELINGA KANAN=========
        var telingaKanan= [];
        telingaKanan = createEllipsoid(0.2,1.25,0.1,0.25,1.75,0,20,1,1,1);
        var telingaKanan_vertex = telingaKanan[0];
        var telingaKanan_faces = telingaKanan[1];
        var nando3 = new myObject(telingaKanan_vertex, telingaKanan_faces, shader_vertex_source,shader_fragment_source);
        nando1.addchild(nando3);

        //=========KAKI KIRI==========
        var kakiKiri= [];
        kakiKiri = createTabungSectioned(0.35,-0.35,-1.85,0,7,1,1,1);
        var kakiKiri_vertex = kakiKiri[0];
        var kakiKiri_faces = kakiKiri[1];
        var nando4 = new myObject(kakiKiri_vertex, kakiKiri_faces, shader_vertex_source,shader_fragment_source);
        nando1.addchild(nando4);

        //=========KAKI KANAN==========
        var kakiKanan= [];
        kakiKanan = createTabungSectioned(0.35,0.35,-1.85,0,7,1,1,1);
        var kakiKanan_vertex = kakiKanan[0];
        var kakiKanan_faces = kakiKanan[1];
        var nando5 = new myObject(kakiKanan_vertex, kakiKanan_faces, shader_vertex_source,shader_fragment_source);
        nando1.addchild(nando5);

        //==========BADAN=============
        var badan= [];
        badan = createTabungSectionedBadan(0.8,0,-1.25,0,65,1,1,1);
        var badan_vertex = badan[0];
        var badan_faces = badan[1];
        var nando6 = new myObject(badan_vertex, badan_faces, shader_vertex_source,shader_fragment_source);
        nando1.addchild(nando6);

        //=========HIDUNG==========
        var hidung= [];
        hidung = createEllipsoid(0.1,0.06,0.1,0,1.12,1.1,0,0,0);
        var hidung_vertex = hidung[0];
        var hidung_faces = hidung[1];
        var nando7 = new myObject(hidung_vertex, hidung_faces, shader_vertex_source,shader_fragment_source);
        nando1.addchild(nando7);

        var hidung2= [];
        hidung2 = createEllipsoid(0.075,0.035,0.05,0,1.12,1.175,1,1,1);
        var hidung2_vertex = hidung2[0];
        var hidung2_faces = hidung2[1];
        var nando8 = new myObject(hidung2_vertex, hidung2_faces, shader_vertex_source,shader_fragment_source);
        nando1.addchild(nando8);

        var circle1_vertex = [];
        circle1_vertex.push(0.185,1.25,1.135);
        circle1_vertex.push(0,0,0);
        for (let i = 0; i <= 360; i++) {
            circle1_vertex.push(0.185 + 0.075 * Math.cos(i/Math.PI));
            circle1_vertex.push(1.25 + 0.075 * Math.sin(i/Math.PI));
            circle1_vertex.push(1.135);
            circle1_vertex.push(0);
            circle1_vertex.push(0);
            circle1_vertex.push(0);
        }
        var circle1_faces = [];
        for (let i = 0; i < 360; i++) {
            circle1_faces.push(0,i,i+1);
        }
        var mata_kanan = new myObject(circle1_vertex, circle1_faces, shader_vertex_source, shader_fragment_source);
        nando1.addchild(mata_kanan)

        var circle2_vertex = [];
        circle2_vertex.push(-0.185,1.25,1.135);
        circle2_vertex.push(0,0,0);
        for (let i = 0; i <= 360; i++) {
            circle2_vertex.push(-0.185 + 0.075 * Math.cos(i/Math.PI));
            circle2_vertex.push(1.25 + 0.075 * Math.sin(i/Math.PI));
            circle2_vertex.push(1.135);
            circle2_vertex.push(0);
            circle2_vertex.push(0);
            circle2_vertex.push(0);
        }
        var circle2_faces = [];
        for (let i = 0; i < 360; i++) {
            circle2_faces.push(0,i,i+1);
        }
        var mata_kiri = new myObject(circle2_vertex, circle2_faces, shader_vertex_source, shader_fragment_source);
        nando1.addchild(mata_kiri)


        var telapak_kaki_kiri= [];
        telapak_kaki_kiri = createEllipsoid(0.375,0.2,0.45,0.35,-1.9,0,1,1,1);
        var telapak_kaki_kiri_vertex = telapak_kaki_kiri[0];
        var telapak_kaki_kiri_faces = telapak_kaki_kiri[1];
        var nando9 = new myObject(telapak_kaki_kiri_vertex, telapak_kaki_kiri_faces, shader_vertex_source,shader_fragment_source);
        nando1.addchild(nando9);

        var telapak_kaki_kanan= [];
        telapak_kaki_kanan = createEllipsoid(0.375,0.2,0.45,-0.35,-1.9,0,1,1,1);
        var telapak_kaki_kanan_vertex =  telapak_kaki_kanan[0];
        var telapak_kaki_kanan_faces = telapak_kaki_kanan[1];
        var nando10 = new myObject(telapak_kaki_kanan_vertex, telapak_kaki_kanan_faces, shader_vertex_source,shader_fragment_source);
        nando1.addchild(nando10);

        var tangan_kiri= [];
        tangan_kiri = createEllipsoid(0.3,0.75,0.3,0.95,-0.45,0,1,1,1);
        var tangan_kiri_vertex =  tangan_kiri[0];
        var tangan_kiri_faces = tangan_kiri[1];
        var nando11 = new myObject(tangan_kiri_vertex, tangan_kiri_faces, shader_vertex_source,shader_fragment_source);
        nando1.addchild(nando11);

        var tangan_kanan= [];
        tangan_kanan = createEllipsoid(0.3,0.75,0.3,-0.95,-0.45,0,1,1,1);
        var tangan_kanan_vertex =  tangan_kanan[0];
        var tangan_kanan_faces = tangan_kanan[1];
        var nando12 = new myObject(tangan_kanan_vertex, tangan_kanan_faces, shader_vertex_source,shader_fragment_source);
        nando1.addchild(nando12);

        var garisHidung = [];
        garisHidung = createTabungSectioned(0.05,0,0.9,1.1,2,0,0,0);
        var garisHidung_vertex = garisHidung[0];
        var garisHidung_faces = garisHidung[1];
        var nando13 = new myObject(garisHidung_vertex, garisHidung_faces, shader_vertex_source,shader_fragment_source);
        nando1.addchild(nando13);

        var garisKurva = [];
        garisKurva = createBezierRectangularPrism(-0.15, -0.05+1, 0, -0.15+1, 0, -0.15+1, 0.15, -0.05+1, 1.3, 0, 0, 0, 100);
        var garisKurva_vertex = garisKurva[0];
        var garisKurva_faces = garisKurva[1];
        var nando14 =new myObject(garisKurva_vertex,garisKurva_faces,shader_vertex_source,shader_fragment_source);
        nando1.addchild(nando14);


        //================================KARAKTER SAM==========================================
        

        var kepala = [];
        kepala = createEllipsoid(1.35,1,0.9,5-5,0.52,0,0,1,0);
        var kepala_vertex = kepala[0];
        var kepala_faces = kepala[1];
        var samObject1 = new myObject(kepala_vertex, kepala_faces, shader_vertex_source, shader_fragment_source);
        
        var badan = [];
        badan = createTabungSectioned(0.55,5-5,-1.25,0,14,0,1,0);
        var badan_vertex = badan[0];
        var badan_faces = badan[1];
        var samObject2 = new myObject(badan_vertex, badan_faces, shader_vertex_source, shader_fragment_source);
        samObject1.addchild(samObject2);

        var topi = [];
        topi = createConeSam(0.5,0.95,5-5,1,0,20,0.5,0.55,1);
        var topi_vertex = topi[0];
        var topi_faces = topi[1];
        var samObject3 = new myObject(topi_vertex, topi_faces, shader_vertex_source, shader_fragment_source);
        samObject1.addchild(samObject3);

        var lengan1 = [];
        lengan1 = createTabungSectioned(0.16,4.265-5,-1.19,0,10,0,1,0);
        var lengan1_vertex = lengan1[0];
        var lengan1_faces = lengan1[1];
        var samObject4 = new myObject(lengan1_vertex, lengan1_faces, shader_vertex_source, shader_fragment_source);
        samObject1.addchild(samObject4);

        var lengan2 = [];
        lengan2 = createTabungSectioned(0.16,5.735-5,-1.19,0,10,0,1,0);
        var lengan2_vertex = lengan2[0];
        var lengan2_faces = lengan2[1];
        var samObject5 = new myObject(lengan2_vertex, lengan2_faces, shader_vertex_source, shader_fragment_source);
        samObject1.addchild(samObject5);

        var tangan1 = [];
        tangan1 = createSphereNando(5.77-5, -1.14, 0, 0.2, 100, 0, 1, 0)
        var tangan1_vertex = tangan1[0];
        var tangan1_faces = tangan1[1];
        var samObject6 = new myObject(tangan1_vertex, tangan1_faces, shader_vertex_source, shader_fragment_source);
        samObject1.addchild(samObject6);

        var tangan2 = [];
        tangan2 = createSphereNando(4.228-5, -1.14, 0, 0.2, 100, 0, 1, 0)
        var tangan2_vertex = tangan2[0];
        var tangan2_faces = tangan2[1];
        var samObject7 = new myObject(tangan2_vertex, tangan2_faces, shader_vertex_source, shader_fragment_source);
        samObject1.addchild(samObject7);

        var mata1 = [];
        mata1 = createEllipsoid(0.36,0.5,0.2,5.6-5,1.5,0.38,0,1,0);
        var mata1_vertex = mata1[0];
        var mata1_faces = mata1[1];
        var samObject8 = new myObject(mata1_vertex, mata1_faces, shader_vertex_source, shader_fragment_source);
        samObject1.addchild(samObject8);

        var mata2 = [];
        mata2 = createEllipsoid(0.36,0.5,0.2,4.4-5,1.5,0.38,0,1,0);
        var mata2_vertex = mata2[0];
        var mata2_faces = mata2[1];
        var samObject9 = new myObject(mata2_vertex, mata2_faces, shader_vertex_source, shader_fragment_source);
        samObject1.addchild(samObject9);

        var mata3 = [];
        mata3 = createEllipsoid(0.2,0.34,0.2,4.4-5,1.5,0.6,1,1,1);
        var mata3_vertex = mata3[0];
        var mata3_faces = mata3[1];
        var samObject12 = new myObject(mata3_vertex, mata3_faces, shader_vertex_source, shader_fragment_source);
        samObject1.addchild(samObject12);

        var mata4 = [];
        mata4 = createEllipsoid(0.2,0.34,0.2,5.6-5,1.5,0.6,1,1,1);
        var mata4_vertex = mata4[0];
        var mata4_faces = mata4[1];
        var samObject13 = new myObject(mata4_vertex, mata4_faces, shader_vertex_source, shader_fragment_source);
        samObject1.addchild(samObject13);

        var mata5 = [];
        mata5 = createEllipsoid(0.1,0.24,0.1,5.485-5,1.45,0.74,0,0,0);
        var mata5_vertex = mata5[0];
        var mata5_faces = mata5[1];
        var samObject14 = new myObject(mata5_vertex, mata5_faces, shader_vertex_source, shader_fragment_source);
        samObject1.addchild(samObject14);

        var mata6 = [];
        mata6 = createEllipsoid(0.1,0.24,0.1,4.325-5,1.45,0.74,0,0,0);
        var mata6_vertex = mata6[0];
        var mata6_faces = mata6[1];
        var samObject15 = new myObject(mata6_vertex, mata6_faces, shader_vertex_source, shader_fragment_source);
        samObject1.addchild(samObject15);

        var kaki1 = [];
        kaki1 = createTabungSectioned(0.28,5.285-5,-2.1,0,17,0,1,0);
        var kaki1_vertex = kaki1[0];
        var kaki1_faces = kaki1[1];
        var samObject10 = new myObject(kaki1_vertex, kaki1_faces, shader_vertex_source, shader_fragment_source);
        samObject1.addchild(samObject10);

        var kaki2 = [];
        kaki2 = createTabungSectioned(0.28,4.715-5,-2.1,0,17,0,1,0);
        var kaki2_vertex = kaki2[0];
        var kaki2_faces = kaki2[1];
        var samObject11 = new myObject(kaki2_vertex, kaki2_faces, shader_vertex_source, shader_fragment_source);
        samObject1.addchild(samObject11);

        var hidung1 = [];
        hidung1 = createSphereNando(5.1-5, 1.23, 0.67, 0.04, 100, 0, 0, 0)
        var hidung1_vertex = hidung1[0];
        var hidung1_faces = hidung1[1];
        var samObject16 = new myObject(hidung1_vertex, hidung1_faces, shader_vertex_source, shader_fragment_source);
        samObject1.addchild(samObject16);

        var hidung2 = [];
        hidung2 = createSphereNando(4.897-5, 1.23, 0.67, 0.04, 100, 0, 0, 0)
        var hidung2_vertex = hidung2[0];
        var hidung2_faces = hidung2[1];
        var samObject17 = new myObject(hidung2_vertex, hidung2_faces, shader_vertex_source, shader_fragment_source);
        samObject1.addchild(samObject17);

        var kaki3 = [];
        kaki3 = createEllipsoid(0.3, 0.1, 0.4, 0.4, -2, 0.2, 0, 1, 0);
        var kaki3_vertex = kaki3[0];
        var kaki3_faces = kaki3[1];
        var samObject18 = new myObject(kaki3_vertex, kaki3_faces, shader_vertex_source, shader_fragment_source);
        samObject1.addchild(samObject18);

        var kaki4 = [];
        kaki4 = createEllipsoid(0.3, 0.1, 0.4, -0.4, -2, 0.2, 0, 1, 0);
        var kaki4_vertex = kaki4[0];
        var kaki4_faces = kaki4[1];
        var samObject19 = new myObject(kaki4_vertex, kaki4_faces, shader_vertex_source, shader_fragment_source);
        samObject1.addchild(samObject19);

        var garisKurva1 = [];
        garisKurva1 = createBezierRectangularPrism(-0.15-0.05, -0.25+0.75+0.45, 0-0.05, 0.30+0.45, 0-0.05, 0.30+0.45, 0.15-0.05, -0.25+0.75+0.45, 1.3, 0, 0, 0, 100);
        var garisKurva1_vertex = garisKurva1[0];
        var garisKurva1_faces = garisKurva1[1];
        var kurvaMulutSam =new myObject(garisKurva1_vertex,garisKurva1_faces,shader_vertex_source,shader_fragment_source);
        samObject1.addchild(kurvaMulutSam);

        var garisKurva2 = [];
        garisKurva2 = createBezierRectangularPrism(1*0.15-0.425+0.05, 1*0.15+0.9, 2*0.15-0.425, 0*0.15+0.9, 2*0.15-0.425, 0*0.15+0.9, 1*0.15-0.425+0.05, -1*0.15+0.9, 1.3, 0, 0, 0, 100);
        var garisKurva2_vertex = garisKurva2[0];
        var garisKurva2_faces = garisKurva2[1];
        var kurvaMulutSamKiri =new myObject(garisKurva2_vertex,garisKurva2_faces,shader_vertex_source,shader_fragment_source);
        samObject1.addchild(kurvaMulutSamKiri);

        var garisKurva3 = [];
        garisKurva3 = createBezierRectangularPrism(-1*0.15+0.35-0.05, 1*0.15+0.9, -2*0.15+0.35, 0*0.15+0.9, -2*0.15+0.35, 0*0.15+0.9, -1*0.15+0.35-0.05, -1*0.15+0.9, 1.3, 0, 0, 0, 100);
        var garisKurva3_vertex = garisKurva3[0];
        var garisKurva3_faces = garisKurva3[1];
        var kurvaMulutSamKanan =new myObject(garisKurva3_vertex,garisKurva3_faces,shader_vertex_source,shader_fragment_source);
        samObject1.addchild(kurvaMulutSamKanan);


        //========Environment=========
        var tanah = [];
        tanah = createTabungSectioned(50,0,-12.35,0,100,19/255,150/255,21/255);
        var tanah_vertex = tanah[0];
        var tanah_faces = tanah[1];
        var tanahijo =new myObject(tanah_vertex,tanah_faces,shader_vertex_source,shader_fragment_source);

        //========Pohon==============
        var batang_pohon_temp=[];
        batang_pohon_temp = createTabungSectioned(1,15,-2.5,-10,50,0.7,0.5,0.2);
        var batang_pohon_vertex = batang_pohon_temp[0];
        var batang_pohon_faces = batang_pohon_temp[1];
        var batang_pohon = new myObject(batang_pohon_vertex, batang_pohon_faces,shader_vertex_source,shader_fragment_source);

        var daun1_temp=[];
        daun1_temp = createConeSam(3,4,15,1,-10,50,0,1,0);
        var daun1_vertex = daun1_temp[0];
        var daun1_faces = daun1_temp[1];
        var daun1 = new myObject(daun1_vertex, daun1_faces,shader_vertex_source,shader_fragment_source);
        batang_pohon.addchild(daun1)

        var daun2_temp=[];
        daun2_temp = createConeSam(3,4,15,3,-10,50,0,1,0);
        var daun2_vertex = daun2_temp[0];
        var daun2_faces = daun2_temp[1];
        var daun2 = new myObject(daun2_vertex, daun2_faces,shader_vertex_source,shader_fragment_source);
        batang_pohon.addchild(daun2)

        var daun3_temp=[];
        daun3_temp = createConeSam(3,4,15,5,-10,50,0,1,0);
        var daun3_vertex = daun3_temp[0];
        var daun3_faces = daun3_temp[1];
        var daun3 = new myObject(daun3_vertex, daun3_faces,shader_vertex_source,shader_fragment_source);
        batang_pohon.addchild(daun3)
        
        var batang_pohon1_temp=[];
        batang_pohon1_temp = createTabungSectioned(1,-15, -3,-10,50,0.7,0.5,0.2);
        var batang_pohon1_vertex = batang_pohon1_temp[0];
        var batang_pohon1_faces = batang_pohon1_temp[1];
        var batang_pohon1 = new myObject(batang_pohon1_vertex, batang_pohon1_faces,shader_vertex_source,shader_fragment_source);
        batang_pohon.addchild(batang_pohon1)

        var daun4_temp=[];
        daun4_temp = createConeSam(3,4,-15,1,-10,50,0,1,0);
        var daun4_vertex = daun4_temp[0];
        var daun4_faces = daun4_temp[1];
        var daun4 = new myObject(daun4_vertex, daun4_faces,shader_vertex_source,shader_fragment_source);
        batang_pohon.addchild(daun4)

        var daun5_temp=[];
        daun5_temp = createConeSam(3,4,-15,3,-10,50,0,1,0);
        var daun5_vertex = daun5_temp[0];
        var daun5_faces = daun5_temp[1];
        var daun5 = new myObject(daun5_vertex, daun5_faces,shader_vertex_source,shader_fragment_source);
        batang_pohon.addchild(daun5)

        var daun6_temp=[];
        daun6_temp = createConeSam(3,4,-15,5,-10,50,0,1,0);
        var daun6_vertex = daun6_temp[0];
        var daun6_faces = daun6_temp[1];
        var daun6 = new myObject(daun6_vertex, daun6_faces,shader_vertex_source,shader_fragment_source);
        batang_pohon.addchild(daun6)

        var rumah_temp = [];
        rumah_temp = createRectangularPrism(18, 9, 9, 1, 2, -25, 0, 0.5, 1);
        var rumah_vertex = rumah_temp[0];
        var rumah_faces = rumah_temp[1];
        var rumah = new myObject(rumah_vertex, rumah_faces, shader_vertex_source, shader_fragment_source);
        tanahijo.addchild(rumah)

        var pintu_temp = [];
        pintu_temp = createRectangularPrism(3, 6, 1, -4, 0, -20, 1, 0.5, 0);
        var pintu_vertex = pintu_temp[0];
        var pintu_faces = pintu_temp[1];
        var pintu = new myObject(pintu_vertex, pintu_faces, shader_vertex_source, shader_fragment_source);
        tanahijo.addchild(pintu)

        var gagang_temp = [];
        gagang_temp = createEllipsoid(0.15,0.15,0.5,-5,0.4,-19.6,0,0,0);
        var gagang_vertex = gagang_temp[0];
        var gagang_faces = gagang_temp[1];
        var gagang = new myObject(gagang_vertex, gagang_faces, shader_vertex_source, shader_fragment_source);
        tanahijo.addchild(gagang)

        var piramid_temp = [];
        var piramid_temp = createPyramid(20, 10, 1, 10, -25, 1, 0, 0);
        var piramid_vertex = piramid_temp[0];
        var piramid_faces = piramid_temp[1];
        var piramid = new myObject(piramid_vertex, piramid_faces, shader_vertex_source, shader_fragment_source);
        tanahijo.addchild(piramid);

        var awan1_temp = [];
        awan1_temp = createEllipsoid(2.8,2.5,3,-20,16,-25,0.9,0.9,0.9);
        var awan1_vertex = awan1_temp[0];
        var awan1_faces = awan1_temp[1];
        var awan1 = new myObject(awan1_vertex, awan1_faces, shader_vertex_source, shader_fragment_source);

        var awan2_temp = [];
        awan2_temp = createEllipsoid(2.8,2.5,3,-25,16,-25,0.9,0.9,0.9);
        var awan2_vertex = awan2_temp[0];
        var awan2_faces = awan2_temp[1];
        var awan2 = new myObject(awan2_vertex, awan2_faces, shader_vertex_source, shader_fragment_source);
        awan1.addchild(awan2);

        var awan3_temp = [];
        awan3_temp = createEllipsoid(2.8,2.5,3,-15,16,-25,0.9,0.9,0.9);
        var awan3_vertex = awan3_temp[0];
        var awan3_faces = awan3_temp[1];
        var awan3 = new myObject(awan3_vertex, awan3_faces, shader_vertex_source, shader_fragment_source);
        awan1.addchild(awan3);

        var awan4_temp = [];
        awan4_temp = createEllipsoid(2.8,2.5,3,-23,20,-25,0.9,0.9,0.9);
        var awan4_vertex = awan4_temp[0];
        var awan4_faces = awan4_temp[1];
        var awan4 = new myObject(awan4_vertex, awan4_faces, shader_vertex_source, shader_fragment_source);
        awan1.addchild(awan4);

        var awan5_temp = [];
        awan5_temp = createEllipsoid(2.8,2.5,3,-18,20,-25,0.9,0.9,0.9);
        var awan5_vertex = awan5_temp[0];
        var awan5_faces = awan5_temp[1];
        var awan5 = new myObject(awan5_vertex, awan5_faces, shader_vertex_source, shader_fragment_source);
        awan1.addchild(awan5);

        var awan6_temp = [];
        awan6_temp = createEllipsoid(2.8,2.5,3,-14,19,-25,0.9,0.9,0.9);
        var awan6_vertex = awan6_temp[0];
        var awan6_faces = awan6_temp[1];
        var awan6 = new myObject(awan6_vertex, awan6_faces, shader_vertex_source, shader_fragment_source);
        awan1.addchild(awan6);

        var awan7_temp = [];
        awan7_temp = createEllipsoid(2.8,2.5,3,-26,19,-25,0.9,0.9,0.9);
        var awan7_vertex = awan7_temp[0];
        var awan7_faces = awan7_temp[1];
        var awan7 = new myObject(awan7_vertex, awan7_faces, shader_vertex_source, shader_fragment_source);
        awan1.addchild(awan7);

    
        var bulan_temp = [];
        bulan_temp = createEllipsoid(3,3,3,18,19,-25,1,1,0);
        var bulan_vertex = bulan_temp[0];
        var bulan_faces = bulan_temp[1];
        var bulan = new myObject(bulan_vertex, bulan_faces, shader_vertex_source, shader_fragment_source);
        awan1.addchild(bulan);

        var bench1_temp = [];
        bench1_temp = createRectangularPrism(6, 0.2, 1, 6, -0.5, -17, 0.7, 0.5, 0.2);
        var bench1_vertex = bench1_temp[0];
        var bench1_faces = bench1_temp[1];
        var bench1 = new myObject(bench1_vertex, bench1_faces, shader_vertex_source, shader_fragment_source);

        var bench2_temp = [];
        bench2_temp = createRectangularPrism(6, 1.2, 0.2, 6, 0, -18, 0.7, 0.5, 0.2);
        var bench2_vertex = bench2_temp[0];
        var bench2_faces = bench2_temp[1];
        var bench2 = new myObject(bench2_vertex, bench2_faces, shader_vertex_source, shader_fragment_source);
        bench1.addchild(bench2)

        var bench3_temp = [];
        bench3_temp = createTabungSectioned(0.1, 3.5, -2.3, -17, 18, 0, 0, 0);
        var bench3_vertex = bench3_temp[0];
        var bench3_faces = bench3_temp[1];
        var bench3 = new myObject(bench3_vertex, bench3_faces, shader_vertex_source, shader_fragment_source);
        bench1.addchild(bench3)

        var bench4_temp = [];
        bench4_temp = createTabungSectioned(0.1, 8.5, -2.3, -17, 18, 0, 0, 0);
        var bench4_vertex = bench4_temp[0];
        var bench4_faces = bench4_temp[1];
        var bench4 = new myObject(bench4_vertex, bench4_faces, shader_vertex_source, shader_fragment_source);
        bench1.addchild(bench4)

  
        //MATRIX
        var PROJMATRIX = LIBS.get_projection(40,CANVAS.width/CANVAS.height,1,100);
        var VIEWMATRIX = LIBS.get_I4();
  
  
        LIBS.translateZ(VIEWMATRIX,-20);
        var THETA=0, PHI=0;

        //==================================DRAWING==================================
        GL.clearColor(0.0,0.0,0.0,0.0);
        GL.enable(GL.DEPTH_TEST);
        GL.depthFunc(GL.LEQUAL);
        GL.clearDepth(1.0);
        var time_prev = 0;
        var animate = function(time) {
            if(time > 0) {
                var dt = (time - time_prev);
                if(!drag){
                    dX *= AMORIZATION;
                    dY *= AMORIZATION;
                    THETA += dX;
                    PHI += dY;
                }

                aca1.MOVEMATRIX = glMatrix.mat4.create();
                aca1.child[0].MOVEMATRIX = glMatrix.mat4.create();
                LIBS.set_I4(aca1.MOVEMATRIX);
                temp =LIBS.get_I4();
                LIBS.translateX(temp,-5);
                aca1.MOVEMATRIX = LIBS.mul(aca1.MOVEMATRIX, temp);

                for(let i = 0;i<aca1.child.length;i++){
                    LIBS.set_I4(aca1.child[i].MOVEMATRIX);
                    temp =LIBS.get_I4();
                    LIBS.translateX(temp,-5);
                    aca1.child[i].MOVEMATRIX = LIBS.mul(aca1.child[i].MOVEMATRIX, temp);
                  }

                
                nando1.MOVEMATRIX = glMatrix.mat4.create();
                nando1.child[0].MOVEMATRIX = glMatrix.mat4.create();
                LIBS.set_I4(nando1.MOVEMATRIX);
                temp =LIBS.get_I4();
                LIBS.translateX(temp,0);
                nando1.MOVEMATRIX = LIBS.mul(nando1.MOVEMATRIX, temp);

                for(let i = 0;i<nando1.child.length;i++){
                    LIBS.set_I4(nando1.child[i].MOVEMATRIX);
                    temp =LIBS.get_I4();
                    LIBS.translateX(temp,0);
                    nando1.child[i].MOVEMATRIX = LIBS.mul(nando1.child[i].MOVEMATRIX, temp);
                  }

                samObject1.MOVEMATRIX = glMatrix.mat4.create();
                samObject1.child[0].MOVEMATRIX = glMatrix.mat4.create();
                LIBS.set_I4(samObject1.MOVEMATRIX);
                temp =LIBS.get_I4();
                LIBS.translateX(temp,5);
                samObject1.MOVEMATRIX = LIBS.mul(samObject1.MOVEMATRIX, temp);

                for(let i = 0;i<samObject1.child.length;i++){
                    LIBS.set_I4(samObject1.child[i].MOVEMATRIX);
                    temp =LIBS.get_I4();
                    LIBS.translateX(temp,5);
                    samObject1.child[i].MOVEMATRIX = LIBS.mul(samObject1.child[i].MOVEMATRIX, temp);
                  }

                    

                
            if(time <=1500){
                if(time  > 500){
                    //=====================ACA ROTATE==============================
                    glMatrix.mat4.rotateY(aca1.MOVEMATRIX, aca1.MOVEMATRIX, LIBS.degToRad(-1000 * 0.05));
                    glMatrix.mat4.rotateY(aca1.child[0].MOVEMATRIX, aca1.child[0].MOVEMATRIX, LIBS.degToRad(-1000 * 0.05));
                    glMatrix.mat4.rotateY(aca1.child[1].MOVEMATRIX, aca1.child[1].MOVEMATRIX, LIBS.degToRad(-1000 * 0.05));
                    glMatrix.mat4.rotateY(aca1.child[2].MOVEMATRIX, aca1.child[2].MOVEMATRIX, LIBS.degToRad(-1000 * 0.05));
                    glMatrix.mat4.rotateY(aca1.child[3].MOVEMATRIX, aca1.child[3].MOVEMATRIX, LIBS.degToRad(-1000 * 0.05));
                    glMatrix.mat4.rotateY(aca1.child[4].MOVEMATRIX, aca1.child[4].MOVEMATRIX, LIBS.degToRad(-1000 * 0.05));
                    glMatrix.mat4.rotateY(aca1.child[5].MOVEMATRIX, aca1.child[5].MOVEMATRIX, LIBS.degToRad(-1000 * 0.05));
                    
                    glMatrix.mat4.rotateY(aca1.MOVEMATRIX, aca1.MOVEMATRIX, LIBS.degToRad(time * 0.05));
                    glMatrix.mat4.rotateY(aca1.child[0].MOVEMATRIX, aca1.child[0].MOVEMATRIX, LIBS.degToRad(time * 0.05));
                    glMatrix.mat4.rotateY(aca1.child[1].MOVEMATRIX, aca1.child[1].MOVEMATRIX, LIBS.degToRad(time * 0.05));
                    glMatrix.mat4.rotateY(aca1.child[2].MOVEMATRIX, aca1.child[2].MOVEMATRIX, LIBS.degToRad(time * 0.05));
                    glMatrix.mat4.rotateY(aca1.child[3].MOVEMATRIX, aca1.child[3].MOVEMATRIX, LIBS.degToRad(time * 0.05));
                    glMatrix.mat4.rotateY(aca1.child[4].MOVEMATRIX, aca1.child[4].MOVEMATRIX, LIBS.degToRad(time * 0.05));
                    glMatrix.mat4.rotateY(aca1.child[5].MOVEMATRIX, aca1.child[5].MOVEMATRIX, LIBS.degToRad(time * 0.05));
                    

                    //=======================NANDO ROTATE==========================
                    glMatrix.mat4.rotateY(nando1.MOVEMATRIX, nando1.MOVEMATRIX, LIBS.degToRad(-1000 * 0.05));
                    glMatrix.mat4.rotateY(nando1.child[0].MOVEMATRIX, nando1.child[0].MOVEMATRIX, LIBS.degToRad(-1000 * 0.05));
                    glMatrix.mat4.rotateY(nando1.child[1].MOVEMATRIX, nando1.child[1].MOVEMATRIX, LIBS.degToRad(-1000 * 0.05));
                    glMatrix.mat4.rotateY(nando1.child[2].MOVEMATRIX, nando1.child[2].MOVEMATRIX, LIBS.degToRad(-1000 * 0.05));
                    glMatrix.mat4.rotateY(nando1.child[3].MOVEMATRIX, nando1.child[3].MOVEMATRIX, LIBS.degToRad(-1000 * 0.05));
                    glMatrix.mat4.rotateY(nando1.child[4].MOVEMATRIX, nando1.child[4].MOVEMATRIX, LIBS.degToRad(-1000 * 0.05));
                    glMatrix.mat4.rotateY(nando1.child[8].MOVEMATRIX, nando1.child[8].MOVEMATRIX, LIBS.degToRad(-1000 * 0.05));
                    glMatrix.mat4.rotateY(nando1.child[9].MOVEMATRIX, nando1.child[9].MOVEMATRIX, LIBS.degToRad(-1000 * 0.05));
                    glMatrix.mat4.rotateY(nando1.child[10].MOVEMATRIX, nando1.child[10].MOVEMATRIX, LIBS.degToRad(-1000 * 0.05));
                    glMatrix.mat4.rotateY(nando1.child[11].MOVEMATRIX, nando1.child[11].MOVEMATRIX, LIBS.degToRad(-1000 * 0.05));
                    glMatrix.mat4.rotateY(nando1.child[16].MOVEMATRIX, nando1.child[16].MOVEMATRIX, LIBS.degToRad(-1000 * 0.05));
                    glMatrix.mat4.rotateY(nando1.child[17].MOVEMATRIX, nando1.child[17].MOVEMATRIX, LIBS.degToRad(-1000 * 0.05));

                    glMatrix.mat4.rotateY(nando1.MOVEMATRIX, nando1.MOVEMATRIX, LIBS.degToRad(time * 0.05));
                    glMatrix.mat4.rotateY(nando1.child[0].MOVEMATRIX, nando1.child[0].MOVEMATRIX, LIBS.degToRad(time * 0.05));
                    glMatrix.mat4.rotateY(nando1.child[1].MOVEMATRIX, nando1.child[1].MOVEMATRIX, LIBS.degToRad(time * 0.05));
                    glMatrix.mat4.rotateY(nando1.child[2].MOVEMATRIX, nando1.child[2].MOVEMATRIX, LIBS.degToRad(time * 0.05));
                    glMatrix.mat4.rotateY(nando1.child[3].MOVEMATRIX, nando1.child[3].MOVEMATRIX, LIBS.degToRad(time * 0.05));
                    glMatrix.mat4.rotateY(nando1.child[4].MOVEMATRIX, nando1.child[4].MOVEMATRIX, LIBS.degToRad(time * 0.05));
                    glMatrix.mat4.rotateY(nando1.child[8].MOVEMATRIX, nando1.child[8].MOVEMATRIX, LIBS.degToRad(time * 0.05));
                    glMatrix.mat4.rotateY(nando1.child[9].MOVEMATRIX, nando1.child[9].MOVEMATRIX, LIBS.degToRad(time * 0.05));
                    glMatrix.mat4.rotateY(nando1.child[10].MOVEMATRIX, nando1.child[10].MOVEMATRIX, LIBS.degToRad(time * 0.05));
                    glMatrix.mat4.rotateY(nando1.child[11].MOVEMATRIX, nando1.child[11].MOVEMATRIX, LIBS.degToRad(time * 0.05));
                    glMatrix.mat4.rotateY(nando1.child[16].MOVEMATRIX, nando1.child[16].MOVEMATRIX, LIBS.degToRad(time * 0.05));
                    glMatrix.mat4.rotateY(nando1.child[17].MOVEMATRIX, nando1.child[17].MOVEMATRIX, LIBS.degToRad(time * 0.05));




                    //=======================SAM ROTATE==========================
                    glMatrix.mat4.rotateY(samObject1.MOVEMATRIX, samObject1.MOVEMATRIX, LIBS.degToRad(-1000 * 0.05));
                    glMatrix.mat4.rotateY(samObject1.child[1].MOVEMATRIX, samObject1.child[1].MOVEMATRIX, LIBS.degToRad(-1000 * 0.05));
                    glMatrix.mat4.rotateY(samObject1.child[6].MOVEMATRIX, samObject1.child[6].MOVEMATRIX, LIBS.degToRad(-1000 * 0.05));
                    glMatrix.mat4.rotateY(samObject1.child[7].MOVEMATRIX, samObject1.child[7].MOVEMATRIX, LIBS.degToRad(-1000 * 0.05));
                    glMatrix.mat4.rotateY(samObject1.child[8].MOVEMATRIX, samObject1.child[8].MOVEMATRIX, LIBS.degToRad(-1000 * 0.05));
                    glMatrix.mat4.rotateY(samObject1.child[9].MOVEMATRIX, samObject1.child[9].MOVEMATRIX, LIBS.degToRad(-1000 * 0.05));
                    glMatrix.mat4.rotateY(samObject1.child[10].MOVEMATRIX, samObject1.child[10].MOVEMATRIX, LIBS.degToRad(-1000 * 0.05));
                    glMatrix.mat4.rotateY(samObject1.child[11].MOVEMATRIX, samObject1.child[11].MOVEMATRIX, LIBS.degToRad(-1000 * 0.05));
                    glMatrix.mat4.rotateY(samObject1.child[14].MOVEMATRIX, samObject1.child[14].MOVEMATRIX, LIBS.degToRad(-1000 * 0.05));
                    glMatrix.mat4.rotateY(samObject1.child[15].MOVEMATRIX, samObject1.child[15].MOVEMATRIX, LIBS.degToRad(-1000 * 0.05));
                    glMatrix.mat4.rotateY(samObject1.child[18].MOVEMATRIX, samObject1.child[18].MOVEMATRIX, LIBS.degToRad(-1000 * 0.05));
                    glMatrix.mat4.rotateY(samObject1.child[19].MOVEMATRIX, samObject1.child[19].MOVEMATRIX, LIBS.degToRad(-1000 * 0.05));
                    glMatrix.mat4.rotateY(samObject1.child[20].MOVEMATRIX, samObject1.child[20].MOVEMATRIX, LIBS.degToRad(-1000 * 0.05));
                    
                    glMatrix.mat4.rotateY(samObject1.MOVEMATRIX, samObject1.MOVEMATRIX, LIBS.degToRad(time * 0.05));
                    glMatrix.mat4.rotateY(samObject1.child[1].MOVEMATRIX, samObject1.child[1].MOVEMATRIX, LIBS.degToRad(time * 0.05));
                    glMatrix.mat4.rotateY(samObject1.child[6].MOVEMATRIX, samObject1.child[6].MOVEMATRIX, LIBS.degToRad(time * 0.05));
                    glMatrix.mat4.rotateY(samObject1.child[7].MOVEMATRIX, samObject1.child[7].MOVEMATRIX, LIBS.degToRad(time * 0.05));
                    glMatrix.mat4.rotateY(samObject1.child[8].MOVEMATRIX, samObject1.child[8].MOVEMATRIX, LIBS.degToRad(time * 0.05));
                    glMatrix.mat4.rotateY(samObject1.child[9].MOVEMATRIX, samObject1.child[9].MOVEMATRIX, LIBS.degToRad(time * 0.05));
                    glMatrix.mat4.rotateY(samObject1.child[10].MOVEMATRIX, samObject1.child[10].MOVEMATRIX, LIBS.degToRad(time * 0.05));
                    glMatrix.mat4.rotateY(samObject1.child[11].MOVEMATRIX, samObject1.child[11].MOVEMATRIX, LIBS.degToRad(time * 0.05));
                    glMatrix.mat4.rotateY(samObject1.child[14].MOVEMATRIX, samObject1.child[14].MOVEMATRIX, LIBS.degToRad(time * 0.05));
                    glMatrix.mat4.rotateY(samObject1.child[15].MOVEMATRIX, samObject1.child[15].MOVEMATRIX, LIBS.degToRad(time * 0.05));
                    glMatrix.mat4.rotateY(samObject1.child[18].MOVEMATRIX, samObject1.child[18].MOVEMATRIX, LIBS.degToRad(time * 0.05));
                    glMatrix.mat4.rotateY(samObject1.child[19].MOVEMATRIX, samObject1.child[19].MOVEMATRIX, LIBS.degToRad(time * 0.05));
                    glMatrix.mat4.rotateY(samObject1.child[20].MOVEMATRIX, samObject1.child[20].MOVEMATRIX, LIBS.degToRad(time * 0.05));

                }else{
                    //=====================ACA ROTATE==============================
                    glMatrix.mat4.rotateY(aca1.MOVEMATRIX, aca1.MOVEMATRIX, LIBS.degToRad(time * -0.05));
                    glMatrix.mat4.rotateY(aca1.child[0].MOVEMATRIX, aca1.child[0].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                    glMatrix.mat4.rotateY(aca1.child[1].MOVEMATRIX, aca1.child[1].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                    glMatrix.mat4.rotateY(aca1.child[2].MOVEMATRIX, aca1.child[2].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                    glMatrix.mat4.rotateY(aca1.child[3].MOVEMATRIX, aca1.child[3].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                    glMatrix.mat4.rotateY(aca1.child[4].MOVEMATRIX, aca1.child[4].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                    glMatrix.mat4.rotateY(aca1.child[5].MOVEMATRIX, aca1.child[5].MOVEMATRIX, LIBS.degToRad(time * -0.05));

                    //=======================NANDO ROTATE==========================
                    glMatrix.mat4.rotateY(nando1.MOVEMATRIX, nando1.MOVEMATRIX, LIBS.degToRad(time * -0.05));
                    glMatrix.mat4.rotateY(nando1.child[0].MOVEMATRIX, nando1.child[0].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                    glMatrix.mat4.rotateY(nando1.child[1].MOVEMATRIX, nando1.child[1].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                    glMatrix.mat4.rotateY(nando1.child[2].MOVEMATRIX, nando1.child[2].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                    glMatrix.mat4.rotateY(nando1.child[3].MOVEMATRIX, nando1.child[3].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                    glMatrix.mat4.rotateY(nando1.child[4].MOVEMATRIX, nando1.child[4].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                    glMatrix.mat4.rotateY(nando1.child[8].MOVEMATRIX, nando1.child[8].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                    glMatrix.mat4.rotateY(nando1.child[9].MOVEMATRIX, nando1.child[9].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                    glMatrix.mat4.rotateY(nando1.child[10].MOVEMATRIX, nando1.child[10].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                    glMatrix.mat4.rotateY(nando1.child[11].MOVEMATRIX, nando1.child[11].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                    glMatrix.mat4.rotateY(nando1.child[16].MOVEMATRIX, nando1.child[16].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                    glMatrix.mat4.rotateY(nando1.child[17].MOVEMATRIX, nando1.child[17].MOVEMATRIX, LIBS.degToRad(time * -0.05));

                    //=======================SAM ROTATE==========================
                    glMatrix.mat4.rotateY(samObject1.MOVEMATRIX, samObject1.MOVEMATRIX, LIBS.degToRad(time * -0.05));
                    glMatrix.mat4.rotateY(samObject1.child[1].MOVEMATRIX, samObject1.child[1].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                    glMatrix.mat4.rotateY(samObject1.child[6].MOVEMATRIX, samObject1.child[6].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                    glMatrix.mat4.rotateY(samObject1.child[7].MOVEMATRIX, samObject1.child[7].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                    glMatrix.mat4.rotateY(samObject1.child[8].MOVEMATRIX, samObject1.child[8].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                    glMatrix.mat4.rotateY(samObject1.child[9].MOVEMATRIX, samObject1.child[9].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                    glMatrix.mat4.rotateY(samObject1.child[10].MOVEMATRIX, samObject1.child[10].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                    glMatrix.mat4.rotateY(samObject1.child[11].MOVEMATRIX, samObject1.child[11].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                    glMatrix.mat4.rotateY(samObject1.child[14].MOVEMATRIX, samObject1.child[14].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                    glMatrix.mat4.rotateY(samObject1.child[15].MOVEMATRIX, samObject1.child[15].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                    glMatrix.mat4.rotateY(samObject1.child[18].MOVEMATRIX, samObject1.child[18].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                    glMatrix.mat4.rotateY(samObject1.child[19].MOVEMATRIX, samObject1.child[19].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                    glMatrix.mat4.rotateY(samObject1.child[20].MOVEMATRIX, samObject1.child[20].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                }
            } else if(time>1500 && time<=2000){
                //=====================ACA ROTATE==============================
                glMatrix.mat4.rotateY(aca1.MOVEMATRIX, aca1.MOVEMATRIX, LIBS.degToRad(2000 * 0.05));
                glMatrix.mat4.rotateY(aca1.child[0].MOVEMATRIX, aca1.child[0].MOVEMATRIX, LIBS.degToRad(2000 * 0.05));
                glMatrix.mat4.rotateY(aca1.child[1].MOVEMATRIX, aca1.child[1].MOVEMATRIX, LIBS.degToRad(2000 * 0.05));
                glMatrix.mat4.rotateY(aca1.child[2].MOVEMATRIX, aca1.child[2].MOVEMATRIX, LIBS.degToRad(2000 * 0.05));
                glMatrix.mat4.rotateY(aca1.child[3].MOVEMATRIX, aca1.child[3].MOVEMATRIX, LIBS.degToRad(2000 * 0.05));
                glMatrix.mat4.rotateY(aca1.child[4].MOVEMATRIX, aca1.child[4].MOVEMATRIX, LIBS.degToRad(2000 * 0.05));
                glMatrix.mat4.rotateY(aca1.child[5].MOVEMATRIX, aca1.child[5].MOVEMATRIX, LIBS.degToRad(2000 * 0.05));

                glMatrix.mat4.rotateY(aca1.MOVEMATRIX, aca1.MOVEMATRIX, LIBS.degToRad(time * -0.05));
                glMatrix.mat4.rotateY(aca1.child[0].MOVEMATRIX, aca1.child[0].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                glMatrix.mat4.rotateY(aca1.child[1].MOVEMATRIX, aca1.child[1].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                glMatrix.mat4.rotateY(aca1.child[2].MOVEMATRIX, aca1.child[2].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                glMatrix.mat4.rotateY(aca1.child[3].MOVEMATRIX, aca1.child[3].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                glMatrix.mat4.rotateY(aca1.child[4].MOVEMATRIX, aca1.child[4].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                glMatrix.mat4.rotateY(aca1.child[5].MOVEMATRIX, aca1.child[5].MOVEMATRIX, LIBS.degToRad(time * -0.05));

                //=======================NANDO ROTATE==========================
                glMatrix.mat4.rotateY(nando1.MOVEMATRIX, nando1.MOVEMATRIX, LIBS.degToRad(2000 * 0.05));
                glMatrix.mat4.rotateY(nando1.child[0].MOVEMATRIX, nando1.child[0].MOVEMATRIX, LIBS.degToRad(2000 * 0.05));
                glMatrix.mat4.rotateY(nando1.child[1].MOVEMATRIX, nando1.child[1].MOVEMATRIX, LIBS.degToRad(2000 * 0.05));
                glMatrix.mat4.rotateY(nando1.child[2].MOVEMATRIX, nando1.child[2].MOVEMATRIX, LIBS.degToRad(2000 * 0.05));
                glMatrix.mat4.rotateY(nando1.child[3].MOVEMATRIX, nando1.child[3].MOVEMATRIX, LIBS.degToRad(2000 * 0.05));
                glMatrix.mat4.rotateY(nando1.child[4].MOVEMATRIX, nando1.child[4].MOVEMATRIX, LIBS.degToRad(2000 * 0.05));
                glMatrix.mat4.rotateY(nando1.child[8].MOVEMATRIX, nando1.child[8].MOVEMATRIX, LIBS.degToRad(2000 * 0.05));
                glMatrix.mat4.rotateY(nando1.child[9].MOVEMATRIX, nando1.child[9].MOVEMATRIX, LIBS.degToRad(2000 * 0.05));
                glMatrix.mat4.rotateY(nando1.child[10].MOVEMATRIX, nando1.child[10].MOVEMATRIX, LIBS.degToRad(2000 * 0.05));
                glMatrix.mat4.rotateY(nando1.child[11].MOVEMATRIX, nando1.child[11].MOVEMATRIX, LIBS.degToRad(2000 * 0.05));
                glMatrix.mat4.rotateY(nando1.child[16].MOVEMATRIX, nando1.child[16].MOVEMATRIX, LIBS.degToRad(2000 * 0.05));
                glMatrix.mat4.rotateY(nando1.child[17].MOVEMATRIX, nando1.child[17].MOVEMATRIX, LIBS.degToRad(2000 * 0.05));
                
                glMatrix.mat4.rotateY(nando1.MOVEMATRIX, nando1.MOVEMATRIX, LIBS.degToRad(time * -0.05));
                glMatrix.mat4.rotateY(nando1.child[0].MOVEMATRIX, nando1.child[0].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                glMatrix.mat4.rotateY(nando1.child[1].MOVEMATRIX, nando1.child[1].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                glMatrix.mat4.rotateY(nando1.child[2].MOVEMATRIX, nando1.child[2].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                glMatrix.mat4.rotateY(nando1.child[3].MOVEMATRIX, nando1.child[3].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                glMatrix.mat4.rotateY(nando1.child[4].MOVEMATRIX, nando1.child[4].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                glMatrix.mat4.rotateY(nando1.child[8].MOVEMATRIX, nando1.child[8].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                glMatrix.mat4.rotateY(nando1.child[9].MOVEMATRIX, nando1.child[9].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                glMatrix.mat4.rotateY(nando1.child[10].MOVEMATRIX, nando1.child[10].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                glMatrix.mat4.rotateY(nando1.child[11].MOVEMATRIX, nando1.child[11].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                glMatrix.mat4.rotateY(nando1.child[16].MOVEMATRIX, nando1.child[16].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                glMatrix.mat4.rotateY(nando1.child[17].MOVEMATRIX, nando1.child[17].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                
                //==================SAM ROTATE==================================
                glMatrix.mat4.rotateY(samObject1.MOVEMATRIX, samObject1.MOVEMATRIX, LIBS.degToRad(2000 * 0.05));
                glMatrix.mat4.rotateY(samObject1.child[1].MOVEMATRIX, samObject1.child[1].MOVEMATRIX, LIBS.degToRad(2000 * 0.05));
                glMatrix.mat4.rotateY(samObject1.child[6].MOVEMATRIX, samObject1.child[6].MOVEMATRIX, LIBS.degToRad(2000 * 0.05));
                glMatrix.mat4.rotateY(samObject1.child[7].MOVEMATRIX, samObject1.child[7].MOVEMATRIX, LIBS.degToRad(2000 * 0.05));
                glMatrix.mat4.rotateY(samObject1.child[8].MOVEMATRIX, samObject1.child[8].MOVEMATRIX, LIBS.degToRad(2000 * 0.05));
                glMatrix.mat4.rotateY(samObject1.child[9].MOVEMATRIX, samObject1.child[9].MOVEMATRIX, LIBS.degToRad(2000 * 0.05));
                glMatrix.mat4.rotateY(samObject1.child[10].MOVEMATRIX, samObject1.child[10].MOVEMATRIX, LIBS.degToRad(2000 * 0.05));
                glMatrix.mat4.rotateY(samObject1.child[11].MOVEMATRIX, samObject1.child[11].MOVEMATRIX, LIBS.degToRad(2000 * 0.05));
                glMatrix.mat4.rotateY(samObject1.child[14].MOVEMATRIX, samObject1.child[14].MOVEMATRIX, LIBS.degToRad(2000 * 0.05));
                glMatrix.mat4.rotateY(samObject1.child[15].MOVEMATRIX, samObject1.child[15].MOVEMATRIX, LIBS.degToRad(2000 * 0.05));
                glMatrix.mat4.rotateY(samObject1.child[18].MOVEMATRIX, samObject1.child[18].MOVEMATRIX, LIBS.degToRad(2000 * 0.05));
                glMatrix.mat4.rotateY(samObject1.child[19].MOVEMATRIX, samObject1.child[19].MOVEMATRIX, LIBS.degToRad(2000 * 0.05));
                glMatrix.mat4.rotateY(samObject1.child[20].MOVEMATRIX, samObject1.child[20].MOVEMATRIX, LIBS.degToRad(2000 * 0.05));

                glMatrix.mat4.rotateY(samObject1.MOVEMATRIX, samObject1.MOVEMATRIX, LIBS.degToRad(time * -0.05));
                glMatrix.mat4.rotateY(samObject1.child[1].MOVEMATRIX, samObject1.child[1].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                glMatrix.mat4.rotateY(samObject1.child[6].MOVEMATRIX, samObject1.child[6].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                glMatrix.mat4.rotateY(samObject1.child[7].MOVEMATRIX, samObject1.child[7].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                glMatrix.mat4.rotateY(samObject1.child[8].MOVEMATRIX, samObject1.child[8].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                glMatrix.mat4.rotateY(samObject1.child[9].MOVEMATRIX, samObject1.child[9].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                glMatrix.mat4.rotateY(samObject1.child[10].MOVEMATRIX, samObject1.child[10].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                glMatrix.mat4.rotateY(samObject1.child[11].MOVEMATRIX, samObject1.child[11].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                glMatrix.mat4.rotateY(samObject1.child[14].MOVEMATRIX, samObject1.child[14].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                glMatrix.mat4.rotateY(samObject1.child[15].MOVEMATRIX, samObject1.child[15].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                glMatrix.mat4.rotateY(samObject1.child[18].MOVEMATRIX, samObject1.child[18].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                glMatrix.mat4.rotateY(samObject1.child[19].MOVEMATRIX, samObject1.child[19].MOVEMATRIX, LIBS.degToRad(time * -0.05));
                glMatrix.mat4.rotateY(samObject1.child[20].MOVEMATRIX, samObject1.child[20].MOVEMATRIX, LIBS.degToRad(time * -0.05));
            }
            
            //==========SCALING===========
            if (time <= 2000) {
                if (time > 500) {
                    // ACA
                    var scaleFactor = Math.abs(Math.sin(time / 1300)); // Atur sesuai kebutuhan
                    glMatrix.mat4.scale(aca1.MOVEMATRIX, aca1.MOVEMATRIX, [scaleFactor, scaleFactor, scaleFactor]);
                    glMatrix.mat4.scale(aca1.child[0].MOVEMATRIX, aca1.child[0].MOVEMATRIX, [scaleFactor, scaleFactor, scaleFactor]);
                    glMatrix.mat4.scale(aca1.child[1].MOVEMATRIX, aca1.child[1].MOVEMATRIX, [scaleFactor, scaleFactor, scaleFactor]);
                    glMatrix.mat4.scale(aca1.child[2].MOVEMATRIX, aca1.child[2].MOVEMATRIX, [scaleFactor, scaleFactor, scaleFactor]);
                    glMatrix.mat4.scale(aca1.child[3].MOVEMATRIX, aca1.child[3].MOVEMATRIX, [scaleFactor, scaleFactor, scaleFactor]);
                    glMatrix.mat4.scale(aca1.child[4].MOVEMATRIX, aca1.child[4].MOVEMATRIX, [scaleFactor, scaleFactor, scaleFactor]);
                    glMatrix.mat4.scale(aca1.child[5].MOVEMATRIX, aca1.child[5].MOVEMATRIX, [scaleFactor, scaleFactor, scaleFactor]);

                    // NANDO
                    glMatrix.mat4.scale(nando1.MOVEMATRIX, nando1.MOVEMATRIX, [scaleFactor, scaleFactor, scaleFactor]);
                    glMatrix.mat4.scale(nando1.child[0].MOVEMATRIX, nando1.child[0].MOVEMATRIX, [scaleFactor, scaleFactor, scaleFactor]);
                    glMatrix.mat4.scale(nando1.child[1].MOVEMATRIX, nando1.child[1].MOVEMATRIX, [scaleFactor, scaleFactor, scaleFactor]);
                    glMatrix.mat4.scale(nando1.child[2].MOVEMATRIX, nando1.child[2].MOVEMATRIX, [scaleFactor, scaleFactor, scaleFactor]);
                    glMatrix.mat4.scale(nando1.child[3].MOVEMATRIX, nando1.child[3].MOVEMATRIX, [scaleFactor, scaleFactor, scaleFactor]);
                    glMatrix.mat4.scale(nando1.child[4].MOVEMATRIX, nando1.child[4].MOVEMATRIX, [scaleFactor, scaleFactor, scaleFactor]);
                    glMatrix.mat4.scale(nando1.child[8].MOVEMATRIX, nando1.child[8].MOVEMATRIX, [scaleFactor, scaleFactor, scaleFactor]);
                    glMatrix.mat4.scale(nando1.child[9].MOVEMATRIX, nando1.child[9].MOVEMATRIX, [scaleFactor, scaleFactor, scaleFactor]);
                    glMatrix.mat4.scale(nando1.child[10].MOVEMATRIX, nando1.child[10].MOVEMATRIX, [scaleFactor, scaleFactor, scaleFactor]);
                    glMatrix.mat4.scale(nando1.child[11].MOVEMATRIX, nando1.child[11].MOVEMATRIX, [scaleFactor, scaleFactor, scaleFactor]);
                    glMatrix.mat4.scale(nando1.child[16].MOVEMATRIX, nando1.child[16].MOVEMATRIX, [scaleFactor, scaleFactor, scaleFactor]);
                    glMatrix.mat4.scale(nando1.child[17].MOVEMATRIX, nando1.child[17].MOVEMATRIX, [scaleFactor, scaleFactor, scaleFactor]);

                    // SAM
                    glMatrix.mat4.scale(samObject1.MOVEMATRIX, samObject1.MOVEMATRIX, [scaleFactor, scaleFactor, scaleFactor]);
                    glMatrix.mat4.scale(samObject1.child[1].MOVEMATRIX, samObject1.child[1].MOVEMATRIX, [scaleFactor, scaleFactor, scaleFactor]);
                    glMatrix.mat4.scale(samObject1.child[6].MOVEMATRIX, samObject1.child[6].MOVEMATRIX, [scaleFactor, scaleFactor, scaleFactor]);
                    glMatrix.mat4.scale(samObject1.child[7].MOVEMATRIX, samObject1.child[7].MOVEMATRIX, [scaleFactor, scaleFactor, scaleFactor]);
                    glMatrix.mat4.scale(samObject1.child[8].MOVEMATRIX, samObject1.child[8].MOVEMATRIX, [scaleFactor, scaleFactor, scaleFactor]);
                    glMatrix.mat4.scale(samObject1.child[9].MOVEMATRIX, samObject1.child[9].MOVEMATRIX, [scaleFactor, scaleFactor, scaleFactor]);
                    glMatrix.mat4.scale(samObject1.child[10].MOVEMATRIX, samObject1.child[10].MOVEMATRIX, [scaleFactor, scaleFactor, scaleFactor]);
                    glMatrix.mat4.scale(samObject1.child[11].MOVEMATRIX, samObject1.child[11].MOVEMATRIX, [scaleFactor, scaleFactor, scaleFactor]);
                    glMatrix.mat4.scale(samObject1.child[14].MOVEMATRIX, samObject1.child[14].MOVEMATRIX, [scaleFactor, scaleFactor, scaleFactor]);
                    glMatrix.mat4.scale(samObject1.child[15].MOVEMATRIX, samObject1.child[15].MOVEMATRIX, [scaleFactor, scaleFactor, scaleFactor]);
                    glMatrix.mat4.scale(samObject1.child[18].MOVEMATRIX, samObject1.child[18].MOVEMATRIX, [scaleFactor, scaleFactor, scaleFactor]);
                    glMatrix.mat4.scale(samObject1.child[19].MOVEMATRIX, samObject1.child[19].MOVEMATRIX, [scaleFactor, scaleFactor, scaleFactor]);
                    glMatrix.mat4.scale(samObject1.child[20].MOVEMATRIX, samObject1.child[20].MOVEMATRIX, [scaleFactor, scaleFactor, scaleFactor]);

                }
            } else {
                mat4.copy(aca1.MOVEMATRIX, initialModelMatrix);
                aca1.child.forEach((child, index) => mat4.copy(child.MOVEMATRIX, initialChildModelMatrices[index]));
                mat4.copy(nando1.MOVEMATRIX, initialModelMatrix);
                samObject1.child.forEach((child, index) => mat4.copy(child.MOVEMATRIX, initialChildModelMatrices[index]));
                mat4.copy(samObject1.MOVEMATRIX, initialModelMatrix);
                samObject1.child.forEach((child, index) => mat4.copy(child.MOVEMATRIX, initialChildModelMatrices[index]));
            }

        

            
            

            
                // LIBS.set_I4(aca1.MOVEMATRIX);
                // temp =LIBS.get_I4();
                // LIBS.translateX(temp,-5);
                // aca1.MOVEMATRIX = LIBS.mul(aca1.MOVEMATRIX, temp);
                // temp =LIBS.get_I4();
                // LIBS.rotateY(temp, THETA);
                // +
                // LIBS.rotateX(temp,PHI);
                // aca1.MOVEMATRIX = LIBS.mul(aca1.MOVEMATRIX, temp);


                // //===============ENVIRONMENT================
                // LIBS.set_I4(tanahijo.MOVEMATRIX);
                // temp =LIBS.get_I4();
                // LIBS.translateX(temp,0);
                // tanahijo.MOVEMATRIX = LIBS.mul(tanahijo.MOVEMATRIX, temp);
                // temp =LIBS.get_I4();
                // LIBS.rotateY(temp, THETA);
                // +
                // LIBS.rotateX(temp,PHI);
                // tanahijo.MOVEMATRIX = LIBS.mul(tanahijo.MOVEMATRIX, temp);

                // LIBS.set_I4(batang_pohon.MOVEMATRIX);
                // temp =LIBS.get_I4();
                // LIBS.translateX(temp,0);
                // batang_pohon.MOVEMATRIX = LIBS.mul(batang_pohon.MOVEMATRIX, temp);
                // temp =LIBS.get_I4();
                // LIBS.rotateY(temp, THETA);
                // +
                // LIBS.rotateX(temp,PHI);
                // batang_pohon.MOVEMATRIX = LIBS.mul(batang_pohon.MOVEMATRIX, temp);

                // LIBS.set_I4(batang_pohon.child[0].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // batang_pohon.child[0].MOVEMATRIX = LIBS.mul(batang_pohon.MOVEMATRIX, temp);

                // LIBS.set_I4(batang_pohon.child[1].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // batang_pohon.child[1].MOVEMATRIX = LIBS.mul(batang_pohon.MOVEMATRIX, temp);

                // LIBS.set_I4(batang_pohon.child[2].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // batang_pohon.child[2].MOVEMATRIX = LIBS.mul(batang_pohon.MOVEMATRIX, temp);



                // //==============ACA========================
                // LIBS.set_I4(aca1.child[0].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // aca1.child[0].MOVEMATRIX = LIBS.mul(aca1.MOVEMATRIX, temp);
                // LIBS.set_I4(aca1.child[1].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // aca1.child[1].MOVEMATRIX = LIBS.mul(aca1.MOVEMATRIX, temp);
                // LIBS.set_I4(aca1.child[2].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // aca1.child[2].MOVEMATRIX = LIBS.mul(aca1.MOVEMATRIX, temp);
                // LIBS.set_I4(aca1.child[3].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // aca1.child[3].MOVEMATRIX = LIBS.mul(aca1.MOVEMATRIX, temp);
                // LIBS.set_I4(aca1.child[4].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // aca1.child[4].MOVEMATRIX = LIBS.mul(aca1.MOVEMATRIX, temp);
                // LIBS.set_I4(aca1.child[5].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // aca1.child[5].MOVEMATRIX = LIBS.mul(aca1.MOVEMATRIX, temp);
                // LIBS.set_I4(aca1.child[6].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // aca1.child[6].MOVEMATRIX = LIBS.mul(aca1.MOVEMATRIX, temp);
                // LIBS.set_I4(aca1.child[7].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // aca1.child[7].MOVEMATRIX = LIBS.mul(aca1.MOVEMATRIX, temp);
                // LIBS.set_I4(aca1.child[8].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // aca1.child[8].MOVEMATRIX = LIBS.mul(aca1.MOVEMATRIX, temp);
                // LIBS.set_I4(aca1.child[9].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // aca1.child[9].MOVEMATRIX = LIBS.mul(aca1.MOVEMATRIX, temp);
                // LIBS.set_I4(aca1.child[10].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // aca1.child[10].MOVEMATRIX = LIBS.mul(aca1.MOVEMATRIX, temp);


                // //===================NANDO=================
                // LIBS.set_I4(nando1.MOVEMATRIX);
                // temp =LIBS.get_I4();
                // LIBS.translateX(temp,0);
                // LIBS.translateY(temp,-0.25);
                // nando1.MOVEMATRIX = LIBS.mul(nando1.MOVEMATRIX, temp);
                // temp =LIBS.get_I4();
                // LIBS.rotateY(temp, THETA);
                // +
                // LIBS.rotateX(temp,PHI);
                // nando1.MOVEMATRIX = LIBS.mul(nando1.MOVEMATRIX, temp);
                // LIBS.set_I4(nando1.child[0].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // // LIBS.rotateZ(temp,0.25);
                // nando1.child[0].MOVEMATRIX = LIBS.mul(nando1.MOVEMATRIX, temp);
                // LIBS.set_I4(nando1.child[1].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // // LIBS.rotateZ(temp,-0.25);
                // nando1.child[1].MOVEMATRIX = LIBS.mul(nando1.MOVEMATRIX, temp);
                // LIBS.set_I4(nando1.child[2].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // nando1.child[2].MOVEMATRIX = LIBS.mul(nando1.MOVEMATRIX, temp);
                // LIBS.set_I4(nando1.child[3].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // nando1.child[3].MOVEMATRIX = LIBS.mul(nando1.MOVEMATRIX, temp);
                // LIBS.set_I4(nando1.child[4].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // nando1.child[4].MOVEMATRIX = LIBS.mul(nando1.MOVEMATRIX, temp);
                // LIBS.set_I4(nando1.child[5].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // nando1.child[5].MOVEMATRIX = LIBS.mul(nando1.MOVEMATRIX, temp);
                // LIBS.set_I4(nando1.child[6].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // nando1.child[6].MOVEMATRIX = LIBS.mul(nando1.MOVEMATRIX, temp);
                // LIBS.set_I4(nando1.child[7].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // nando1.child[7].MOVEMATRIX = LIBS.mul(nando1.MOVEMATRIX, temp);
                // LIBS.set_I4(nando1.child[8].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // nando1.child[8].MOVEMATRIX = LIBS.mul(nando1.MOVEMATRIX, temp);
                // LIBS.set_I4(nando1.child[9].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // nando1.child[9].MOVEMATRIX = LIBS.mul(nando1.MOVEMATRIX, temp);
                // LIBS.set_I4(nando1.child[10].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // nando1.child[10].MOVEMATRIX = LIBS.mul(nando1.MOVEMATRIX, temp);
                // LIBS.set_I4(nando1.child[11].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // nando1.child[11].MOVEMATRIX = LIBS.mul(nando1.MOVEMATRIX, temp);
                // LIBS.set_I4(nando1.child[12].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // nando1.child[12].MOVEMATRIX = LIBS.mul(nando1.MOVEMATRIX, temp);
                // LIBS.set_I4(nando1.child[13].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // nando1.child[13].MOVEMATRIX = LIBS.mul(nando1.MOVEMATRIX, temp);
                // LIBS.set_I4(nando1.child[14].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // nando1.child[14].MOVEMATRIX = LIBS.mul(nando1.MOVEMATRIX, temp);
                // LIBS.set_I4(nando1.child[15].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // nando1.child[15].MOVEMATRIX = LIBS.mul(nando1.MOVEMATRIX, temp);
                
                // //==================SAM=========================
                // LIBS.set_I4(samObject1.MOVEMATRIX);
                // temp =LIBS.get_I4();
                // LIBS.translateX(temp,0);
                // samObject1.MOVEMATRIX = LIBS.mul(samObject1.MOVEMATRIX, temp);
                // temp =LIBS.get_I4();
                // LIBS.rotateY(temp, THETA);
                // +
                // LIBS.rotateX(temp,PHI);
                // samObject1.MOVEMATRIX = LIBS.mul(samObject1.MOVEMATRIX, temp);
                
                // temp =LIBS.get_I4();
                // LIBS.translateX(temp,0);
                // samObject1.MOVEMATRIX = LIBS.mul(samObject1.MOVEMATRIX, temp);

                // LIBS.set_I4(samObject1.child[0].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // samObject1.child[0].MOVEMATRIX = LIBS.mul(samObject1.MOVEMATRIX, temp);

                // LIBS.set_I4(samObject1.child[1].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // samObject1.child[1].MOVEMATRIX = LIBS.mul(samObject1.MOVEMATRIX, temp);

                // LIBS.set_I4(samObject1.child[2].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // samObject1.child[2].MOVEMATRIX = LIBS.mul(samObject1.MOVEMATRIX, temp);

                // LIBS.set_I4(samObject1.child[3].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // samObject1.child[3].MOVEMATRIX = LIBS.mul(samObject1.MOVEMATRIX, temp);

                // LIBS.set_I4(samObject1.child[4].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // samObject1.child[4].MOVEMATRIX = LIBS.mul(samObject1.MOVEMATRIX, temp);

                // LIBS.set_I4(samObject1.child[5].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // samObject1.child[5].MOVEMATRIX = LIBS.mul(samObject1.MOVEMATRIX, temp);

                // LIBS.set_I4(samObject1.child[6].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // samObject1.child[6].MOVEMATRIX = LIBS.mul(samObject1.MOVEMATRIX, temp);

                // LIBS.set_I4(samObject1.child[7].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // samObject1.child[7].MOVEMATRIX = LIBS.mul(samObject1.MOVEMATRIX, temp);

                // LIBS.set_I4(samObject1.child[8].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // samObject1.child[8].MOVEMATRIX = LIBS.mul(samObject1.MOVEMATRIX, temp);

                // LIBS.set_I4(samObject1.child[9].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // samObject1.child[9].MOVEMATRIX = LIBS.mul(samObject1.MOVEMATRIX, temp);

                // LIBS.set_I4(samObject1.child[10].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // samObject1.child[10].MOVEMATRIX = LIBS.mul(samObject1.MOVEMATRIX, temp);

                // LIBS.set_I4(samObject1.child[11].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // samObject1.child[11].MOVEMATRIX = LIBS.mul(samObject1.MOVEMATRIX, temp);

                // LIBS.set_I4(samObject1.child[12].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // samObject1.child[12].MOVEMATRIX = LIBS.mul(samObject1.MOVEMATRIX, temp);

                // LIBS.set_I4(samObject1.child[13].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // samObject1.child[13].MOVEMATRIX = LIBS.mul(samObject1.MOVEMATRIX, temp);

                // LIBS.set_I4(samObject1.child[14].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // samObject1.child[14].MOVEMATRIX = LIBS.mul(samObject1.MOVEMATRIX, temp);

                // LIBS.set_I4(samObject1.child[15].MOVEMATRIX);
                // temp = LIBS.get_I4();
                // samObject1.child[15].MOVEMATRIX = LIBS.mul(samObject1.MOVEMATRIX, temp);
                
                



                
                time_prev = time;
            }
            
            
            GL.viewport(0,0,CANVAS.width,CANVAS.height);
            GL.clear(GL.COLOR_BUFFER_BIT | GL.D_BUFFER_BIT);
  
  
            aca1.setUniform4(PROJMATRIX,VIEWMATRIX);
            tanahijo.setUniform4(PROJMATRIX,VIEWMATRIX);
            nando1.setUniform4(PROJMATRIX,VIEWMATRIX);
            samObject1.setUniform4(PROJMATRIX,VIEWMATRIX);
            batang_pohon.setUniform4(PROJMATRIX,VIEWMATRIX);
            awan1.setUniform4(PROJMATRIX,VIEWMATRIX);
            bench1.setUniform4(PROJMATRIX,VIEWMATRIX);
  
            for(let i = 0;i<aca1.child.length;i++){
              aca1.child[i].setUniform4(PROJMATRIX,VIEWMATRIX);
            }

            for(let i = 0;i<nando1.child.length;i++){
                nando1.child[i].setUniform4(PROJMATRIX,VIEWMATRIX);
            }

            for(let i = 0;i<samObject1.child.length;i++){
                samObject1.child[i].setUniform4(PROJMATRIX,VIEWMATRIX);
            }

            for(let i = 0;i<batang_pohon.child.length;i++){
                batang_pohon.child[i].setUniform4(PROJMATRIX,VIEWMATRIX);
            }
            for(let i = 0;i<tanahijo.child.length;i++){
                tanahijo.child[i].setUniform4(PROJMATRIX,VIEWMATRIX);
            }
    
            for(let i = 0;i<awan1.child.length;i++){
                awan1.child[i].setUniform4(PROJMATRIX,VIEWMATRIX);
            }

            for(let i = 0;i<bench1.child.length;i++){
                bench1.child[i].setUniform4(PROJMATRIX,VIEWMATRIX);
            }
            
          
            aca1.draw();
            nando1.draw();
            tanahijo.draw();
            samObject1.draw();
            batang_pohon.draw();
            awan1.draw();
            bench1.draw();
           
            GL.flush();
            window.requestAnimationFrame(animate);
        }
  
  
        animate();
  
  
    }
  window.addEventListener('load',main);
  
  
  
  
  
  
  
  
  
  