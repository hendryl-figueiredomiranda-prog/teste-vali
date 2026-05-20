const footerTemplate = `
    <footer>
        <div id="footer-content">
            <div class="footer-section">
                <h3 class="footer-title">Links</h3>
                <p>Inicio</p>
                <p>Sobre</p>
                <p>Blog</p>
                <p>Contato</p>
            </div>

            <div class="footer-section">
                <h3 class="footer-title">Suporte</h3>
                <p>Central de Ajuda</p>
                <p>Documentação</p>
                <p>Política de Privacidade</p>
                <p>Termos de Uso</p>
            </div>        

            <div class="footer-section">
                <h3 class="footer-title">Redes Sociais</h3>
                <p>Instagram</p>
                <p>Linkedin</p>
                <p>Twitter</p>
            </div>    

            <div class="footer-section">
                <h3 class="footer-title">Contatos</h3>
                <p>contato@empresa.com</p>
                <p>Telefone: (00) 9 0000 0000</p>
             </div>            
            
            <img src="assets/img/logo_vali_tatu-sem-fundo.png" id="imagem-login-cadastro" alt="Ilustração de um garoto usando celular">
        </div>

        <div id="footer-bottom">
            &copy; 2026 Vali. Todos os direitos reservados.
        </div>
    </footer>
    `

    document.body.insertAdjacentHTML('beforeend', footerTemplate);