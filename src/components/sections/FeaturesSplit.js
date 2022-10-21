import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'NUESTROS SERVICIOS',
    paragraph: ''
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  NUESTROS SERVICIOS
                  </div>
                <h3 className="mt-0 mb-12">
                  COMPRA DE TU VEHICULO
                  </h3>
                <p className="m-0">
                  No lo pienses más realizamos la compra de vehículos usados con toda la garantía y seguridad necesaria que solo nuestro concesionario podrá ofrecerte. Agenda tu cita ahora mismo y vive la mejor experiencia para la venta de tu carro.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/vehiculo-01.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  NUESTROS SERVICIOS
                  </div>
                <h3 className="mt-0 mb-12">
                 Venta de vehiculos Nuevos y Usados
                  </h3>
                <p className="m-0">
                  En Premier Autos tenemos la cualidad de ofrecer vehiculos con los mejores estandares de calidad en el mercado. Tambien tenemos la cualidad de vender vehiculos nuevos listos para traspaso y usados como nuevos.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/compra.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  NUESTROS SERVICIOS
                  </div>
                <h3 className="mt-0 mb-12">
                  CONSIGNACIÓN
                  </h3>
                <p className="m-0">
                  Ofrecemos este servicio de consignación para la seguridad del vendedor, ya que la persona no tiene que atender clientes desconocidos en su casa u oficina y suministrar sus datos personales, lo que sí sucede al vender directamente. 
                  Con este servicio evitaras tener que dedicar tiempo al proceso de venta.
                  Por lo mismo ofrecemos ciertos beneficios como mostrar el vehículo en nuestra vitrina con nuestro equipo de ventas física, webside, publicaciones y así poder tener una eficacia en la rapidez de venta, te garantizamos el pago por su vehículo, pago de contado.
                  Teniendo en cuenta el beneficio en la tramitación profesional de documentos y como un plus en nuestra vitrina de usados podemos ofrecer planes de financiación con diversas identidades.
                  .
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/consignacion.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;