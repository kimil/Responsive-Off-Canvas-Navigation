Responsive-Off-Canvas-Navigation
================================

Demo: http://quantumx.de/responsive-menu/


Example HTML
	<head>
		<meta charset="utf-8">
		
		<link rel="stylesheet" media="screen" href="css/style.css" />
		<link rel="stylesheet" media="screen and (max-width: 767px)" href="css/navigation-mobile.css" />
		<link rel="stylesheet" media="screen and (min-width: 768px)" href="css/navigation-desktop.css" />
	</head>
	
	<body>
	
		<header>
			<span class="open"><a><i class="fa fa-bars"></i></a></span>
		</header>
		
		<nav class="hidden">
			<span class="nav-logo">Navigation</span>
			<span class="close"><a><i class="fa fa-close"></i></a></span>
			<div class="inner clearfix">
		    	<div class="search">
		    		<input type="search" name="search" value="search ..." />
		    	</div>	
				<ul class="menu clearfix">
					<li class="current"><a href="">nav ul li a</a></li>
					<li><a href="">nav ul li a</a></li>
					<li><a href="">nav ul li a</a>
						<ul>
							<li class="current"><a href="">nav ul ul li a</a></li>
							<li><a href="">nav ul ul li a</a></li>
							<li><a href="">nav ul ul li a</a></li>
							<li><a href="">nav ul ul li a</a></li>
							<li><a href="">nav ul ul li a</a></li>
						</ul>
					</li>
					<li><a href="">nav ul li a</a></li>
					<li><a href="">nav ul li a</a></li>
				</ul>
			</div>
		</nav>
		
		<script src="js/jquery.js" type="text/javascript"></script>
		<script src="js/navigation.js" type="text/javascript"></script>
	</body>
</html>