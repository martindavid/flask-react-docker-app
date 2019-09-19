import * as React from "react";
import Link from "next/link";
import { NewsletterSubscription } from "components/controls";

export const Footer: React.FunctionComponent = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-logo">
                <h2>
                  <img
                    alt="Passporr Logo"
                    src="/static/images/logo.svg"
                    className="img-fluid logo"
                  />
                </h2>
                <p>
                  Passporr es una plataforma en línea que organiza y reune toda
                  la información necesaria para aquellos que quieren estudiar en
                  otro país
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-link">
                <h6 className="link-title">Explora</h6>
                <ul>
                  <li>
                    <Link passHref href="/">
                      <a>Inicio</a>
                    </Link>
                  </li>
                  <li>
                    <a href="/cotiza-cursos">Cotiza cursos</a>
                  </li>
                  <li>
                    <Link passHref href="/calculator">
                      <a>Calcula costos de vida</a>
                    </Link>
                  </li>
                  <li>
                    <Link passHref href="/term-and-condition">
                      <a>Condiciones de uso</a>
                    </Link>
                  </li>
                  <li>
                    <Link passHref href="/privacy">
                      <a>Política de Privacidad</a>
                    </Link>
                  </li>
                  <li>
                    <Link passHref href="/blog">
                      <a>Blog</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="footer-subscribe">
                <h6 className="link-title">Subscríbete</h6>
                <NewsletterSubscription />
              </div>
              <div className="footer-social">
                <h6 className="link-title">Síguenos</h6>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a
                      href="https://www.facebook.com/passporr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        alt="Facebook"
                        src="/static/images/icon-facebook.svg"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://www.instagram.com/gopassporr/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        alt="Instagram"
                        src="/static/images/icon-instagram.svg"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="d-sm-flex justify-content-between">
                <p>Copyright © 2018-2019 </p>
                <p>Passporr Pty Ltd. ABN 97634 544 988</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = "Footer";
