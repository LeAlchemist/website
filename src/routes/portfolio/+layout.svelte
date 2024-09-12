<head>
    <style>
        .body {
        width: 100vw;
        margin: auto;
        }

        img{
          display: block;
          width: 500px;
          height: 500px;
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
          
        .content{
          position: relative;
          width: 500px;
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

        .content:hover .title {
          opacity: 1;
        }

    </style>
</head>

<slot></slot>
