<head>
    <style>
        .body {
        width: 100vw;
        margin: auto;
        }

        img{
          display: block;
          width: 250px;
          height: 250px;
        }

        .row {
          display: flex;
          flex-wrap: wrap;
          padding: 5px;
        }
            
        .row > .column {
          width: auto;
          height: 250;
          text-align: center;
          line-height: 75px;
          font-size: 30px;
          padding: 5px;
        }
          
        .content{
          position: relative;
          
        }

        .title {
          position: absolute; 
          bottom: 0; 
          background: rgb(0, 0, 0);
          background: rgba(0, 0, 0, 0.5); /* Black see-through */
          color: #f1f1f1; 
          width: 250px;
          height: 250px;
          transition: .5s ease;
          opacity:0;
          color: white;
          font-size: 20px;
          text-align: center;
        }

        .content:hover .title {
          opacity: 1;
        }

        .filter {
          color: white;
			    background-color: #333;
			    font-size: 100%;
		    }

		    .filter ul {
		    	list-style-type: none;
		    	margin: 0;
		    	padding: 0;
		    	overflow: hidden;
		    	margin: auto;
		    	width: 50vw;
		    }
      
		    .filter li {
		    	float: left;
		    }
      
		    .filter li button {
          background-color: #333;
          border: none;
		    	color: white;
		    	text-align: center;
          font-size: 100%;
		    	text-decoration: none;
          min-width: 100px;
          cursor: pointer;
		    }
      
		    .filter li button:hover {
		    	background-color: #111;
		    }
    </style>
</head>

<slot></slot>
