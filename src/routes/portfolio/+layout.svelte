<head>
    <style>
        .body {
        width: 100vw;
        margin: auto;
        }

        img{
          width: 600px;
          height: 200px;
        }

        .row {
          display: flex;
          flex-wrap: wrap;
        }
            
        .row > .column {
          width: auto;
          height: 250;
          text-align: center;
          line-height: 75px;
          font-size: 30px;
        }
            
        .title {
          position: relative;
          background: rgb(0, 0, 0);
          background: rgba(0, 0, 0, 0.5); /* Black see-through */
          color: #f1f1f1;
          width: 100%;
          transition: .5s ease;
          opacity:0;
          color: white;
          font-size: 20px;
          text-align: center;
        }

        .content:hover .title {
          opacity: 1;
        }

    </style>
</head>

<slot></slot>
