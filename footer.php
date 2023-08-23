<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Astra
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

?>
<?php astra_content_bottom(); ?>
	</div> <!-- ast-container -->
	</div><!-- #content -->
<?php 
	astra_content_after();
		
	astra_footer_before();
		
	astra_footer();
		
	astra_footer_after(); 
?>
	</div><!-- #page -->
<?php 
	astra_body_bottom();    
	wp_footer(); 
?>

	<div class="modal-lgpd" style="display: none;">
		<div class="content">
			<p> Ao navegar neste site, você aceita os cookies que usamos para melhorar sua experiência.</p>
			<a href="https://strongmax.com.br/politica-de-privacidade/" target="_blank" class="link">Política de Privacidade</a>
			<a href="#" class="btn-aceitar">Entendi</a>
		</div>
	</div>


	<div class="footer-top">
		<div class="container-site">
			<div class="institucional">
				<h2>Institucional</h2>
				<nav>
					<ul>
						<li><a href="/sobre-nos">Sobre Nós</a></li>
					</ul>
				</nav>
			</div>
			<div class="suporte">
				<p>"Os produtos comprados neste site serão enviados aos noivos" </p>
			</div>
			<div class="formas-pagamento">
				<h2>Formas de Pagamento</h2>
				<img src="https://strongmax.com.br/wp-content/uploads/2023/03/formas-de-pagamento-pagseguro-1.png" alt="PagSeguro" />
			</div>
		</div>
	</div>

	<div class="footer-bottom">
		<p>© 2023 LKS INFOTEC - CNPJ: 37.810.374/0001-82 - Todos os direitos reservados.</p>
	</div>

	<div class="modal-noivos">
		<div class="conteudo">
			<span class="fechar">&times;</span>
			<img src="http://presentescasamento.com.br/wp-content/uploads/2023/08/Lucas-Ray-69.jpg" alt="Rayane e Lucas"/>
			<div class="conteudo-text">
				<p>Seja bem vindo ao site de presentes dos noivos!</p>
				<br>
				<p>Rayane & Lucas</p>
			</div>
		</div>
	</div>

	<?php $home = get_template_directory_uri(); ?>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
	<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
	<script  src="<?= $home; ?>/deploy/js/general.js"></script>
	</body>
</html>
