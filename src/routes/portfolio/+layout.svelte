<head>
    <style>
        .body {
        width: 100vw;
        margin: auto;
        }

        img{
            max-width: 25vw
        }

        .row {
        margin: 10px -16px;
        }

        /* Add padding BETWEEN each column */
        .row,
        .row > .column {
          padding: 8px;
        }

        /* Create three equal columns that floats next to each other */
        .column {
          float: left;
          width: 33vw;
        }

        /* Clear floats after rows */ 
        .row:after {
          content: "";
          display: table;
          clear: both;
        }
    </style>
</head>

<div class="body">
  <h1>PORTFOLIO</h1>
	<slot></slot>
</div>