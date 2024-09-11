<head>
    <style>
        .body {
        width: 100vw;
        margin: auto;
        }

        img{
          max-width: 30vw
        }

        .row {
        margin: auto;
        }

        /* Add padding BETWEEN each column */
        .row,
        .row > .column {
          padding: 5px;
        }

        /* Create three equal columns that floats next to each other */
        .column {
          float: left;
          width: 30vw;
        }

        /* Clear floats after rows */ 
        .row:after {
          content: "";
          display: table;
          clear: both;
        }
    </style>
</head>

<slot></slot>
