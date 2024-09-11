<head>
    <style>
        .body {
        width: 100vw;
        margin: auto;
        }

        img{
          max-width: 30vw;
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

        .title {
          position: absolute;
          bottom: 0;
          background: rgb(0, 0, 0);
          background: rgba(0, 0, 0, 0.5); /* Black see-through */
          color: #f1f1f1;
          width: 100%;
          transition: .5s ease;
          opacity:0;
          color: white;
          font-size: 20px;
          padding: 20px;
          text-align: center;
        }

        .image:hover .title {
          opacity: 1;
        }

    </style>
</head>

<slot></slot>
