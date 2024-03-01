    <label>Ano Atual:</label>
    <input id="num-1" type="number" />
    <label> Mês Atual:</label>
    <input id="num-2" type="number" />
    <label>Dia Atual:</label>
    <input id="num-3" type="number" />
    <button id="calc-sum">Calcular </button>
    <div id="sum"></div>

    <script type="text/javascript">
      function verificaCampo() {
        document
          .getElementById("calc-sum")
          .addEventListener("click", function () {
            var num1 = document.getElementById("num-1");
            var num2 = document.getElementById("num-2");
            var num3 = document.getElementById("num-3");
            // Transformar os valores em números:
            num1 = Number(num1.value);
            num2 = Number(num2.value);
            num3 = Number(num3.value);

            // Calcular a soma:
            var x0 = ((num2-14)/12);
            var x1 = (1461*(num1+4800+x0))/4 ;
            var x3 = (367*(num2-2-12*x0))/12;
            var x5 = (num1+4900+x0)/100;
            var x6= (3*x5/4);
            var x7= (x1+x3-x6+num2-32075);
                    // Mostrar a soma:
            document.getElementById("sum").innerText = "A distância em metros eh: " + x7;
          });
      }
      verificaCampo();
    </script>
  </body>
</html>
