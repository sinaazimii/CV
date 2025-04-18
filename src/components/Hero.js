import SvgIcon from './Icon';
import Section from './SectionWrapper';

const Hero = () => (
<Section id="hero" bgColor='#f6f6f6' height={'100vh'}>
    <div className="text-center" style={styles.container}>
        <div style={styles.columnOne}>
          <div style={styles.capsule}>
          <i className="bi bi-dot"></i>
            <>Available for work</>
          </div>
          <p style={styles.title}>Hi, I'm a Frontend Developer</p>
          <p style={styles.subtitle}>I Recently graduated master student in Computer Science from a top university and ready to dedicate my full time focus to frontend development</p>

        </div>
        <div style={styles.columnTwo}>
          <img src="/me.jpg" alt="Profile" style={{ width: '250px'}} />
          <div style={styles.socialMediaContainer}>
          {/* <button style={styles.button}> */}
          <SvgIcon svgPath="/github.svg" />
          {/* </button> */}
          {/* <button style={styles.button}> */}
          <SvgIcon svgPath="/linkedin.svg" />
          {/* </button> */}
          {/* <button style={styles.button}> */}
          <SvgIcon svgPath="/mail.svg" />
          {/* </button> */}

          </div>
        </div>
    </div>
  </Section>
);

export default Hero;


// define styles for this component
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6f6f6',
    color: '#f6f6f6',
    height: '100vh',
    textAlign: 'center',
  },
  columnOne: {
    display: 'flex',
    flexDirection: 'column',
    flex:1/2,
    alignItems: 'flex-start',
    textAlign: 'start',
    margin: '50px',
  },
  columnTwo: {
    display: 'flex',
    flexDirection: 'column',
    flex:1/2,
    alignItems: 'center',
    justifyContent: 'center',
    margin: '50px',
  },
  capsule:{
    backgroundColor: '#deecee',
    borderRadius: '12px',
    padding: '8px',
    color: '#409ca9',
    fontSize: '16px',
    marginBottom: '20px',
    boxShadow: '0px 0px 10px 10px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#2e9fb1',
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: '20px',
    color: '#2e9fb1',
  },
   socialMediaContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
    textAlign: 'start',
  },


}
