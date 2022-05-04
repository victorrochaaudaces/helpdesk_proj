const { serverHttp, io, port } = require("../src/app");

// rodar sem certificado
serverHttp.listen(port, (err) => {
  if (err) {
    console.log("ERRO AO RODAR API: " + err);
  } else {
    console.log("SERVIDOR RODANDO NA PORTA:" + port);
  }
});