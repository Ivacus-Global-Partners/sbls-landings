import React from "react";
import { makeStyles } from "@mui/styles";
import { MenuItem, TextField, Theme, useMediaQuery, useTheme } from "@mui/material";
import countries from "../../resources/data/countries";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { hasFlag } from 'country-flag-icons'
import "./style.css";
import { format } from "path";

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    background: "#E5E5E5",
    borderRadius: "20px",
    boxSizing: "border-box",
    padding: "2.5vw 2vw",
    margin: "10px 0",
    textAlign: "center",
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    width: "30vw",
    position: "absolute",
    right: "2em",
    top: "18vw",
    [theme.breakpoints.down(1100)]: {
      top: "17vw",
    },
    [theme.breakpoints.down(1000)]: {
      top: "12vw",
    },
    [theme.breakpoints.down("md")]: {
      top: "15vw",
    },
    [theme.breakpoints.between(949, 960)]: {
      top: "5vw",
    },
    [theme.breakpoints.between(853, 915)]: {
      top: "11vw",
    },
    [theme.breakpoints.down(850)]: {
      position: "relative",
      width: "85%",
      margin: "0 auto",
      top: 0,
      right: 0,
      marginTop: "15px",
    },
  },
  h3: {
    fontStyle: "italic",
    margin: 0,
    padding: 0,
    fontFamily: "times",
    color: "#C70B1F",
    fontSize: "1.8em",
    letterSpacing: "-0.8px",
    fontWeight: "100",
    textAlign: "start",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    columnGap: "5px",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.7em",
    },
  },
  input: {
    fontFamily: "Nunito",
    '& .MuiFilledInput-root': {
      borderRadius: "10px",
      backgroundColor: 'white',
      textAlign: 'left',
      '&:before': {
        borderBottom: 'none', // Elimina la línea antes del input
        content: 'unset',
      },
      '&:hover:before': {
        borderBottom: 'none', // Elimina la línea antes del input en hover
      },
      '&:hover fieldset': {
        borderBottom: 'none', // Elimina la línea después del input en hover
      },
      '& input::placeholder': {
        color: 'black',
        opacity: 1,
        textAlign: 'left',
      },
    },
    '& .MuiFilledInput-input': {
      fontFamily: "Nunito",
      color: 'black',
      paddingTop: '8px !important',
    },
    '& .MuiInputLabel-root': {
      fontFamily: "Nunito",
      color: 'black',
      display: 'none',
    },
    '& .MuiInputBase-input::placeholder': {
      fontFamily: "Nunito",
      color: 'black',
    },
    '& .MuiFilledInput-underline:after': {
      borderBottom: 'none', // Elimina la línea después del input
    },
    '&:hover .MuiFilledInput-underline:after': {
      borderBottom: 'none', // Elimina la línea después del input en hover
    },
  },
  checkbox: {
    display: "flex",
    alignItems: "flex-start",
    columnGap: "15px",
    fontFamily: "times",
    fontStyle: "italic",
    fontSize: "1vw",
    margin: "10px 0 20px 5px",
    width: "100%",
    textAlign: "start",
    justifyContent: "start",
    [theme.breakpoints.up("md")]: {
      maxWidth: "30vw",
    },
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      maxWidth: "95%",
      fontSize: "1em",
    },
    [theme.breakpoints.down(950)]: {
      fontSize: "0.8em",
    },
  },
  a: {
    color: "black",
  },
  button: {
    display: "flex",
    columnGap: "5px",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50px",
    border: "none",
    color: "white",
    padding: "10px 20px",
    margin: "0 auto",
    boxShadow: "0px 4px 8px #7e7777",
    cursor: "pointer",
    fontSize: "1em",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.8em",
    },
  },
  checkboxText: {
    display: "inline",
    lineHeight: "1.3em",
    fontSize: "14px",
  },
 
  option: {
    color: "gray",
    "&:hover": {
      background: "#e6e6e6",
    },
  },
}));

const InfoForm2 = ({
  shadow = false,
  submit,
  title = false,
  href,
  redirect,
  download,
  productId,
  formId,
  style
}: {
  shadow?: boolean;
  submit: any;
  title?: boolean;
  href: string;
  redirect?: string;
  download: string;
  productId: string;
  formId: string;
  style?: React.CSSProperties;
}) => {
  const classes = useStyles();
  const [enabledSubmit, setEnabledSubmit] = React.useState(false);
  const theme = useTheme();
  const upMd = useMediaQuery(theme.breakpoints.up("md"));
  const [values, setValues] = React.useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    prefix: '0',
    format: 'Presencial'
  })
  const [errors, setErrors] = React.useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    format: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValues((current) => ({
      ...current,
      [name]: value
    }))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const re = /^[0-9\b]+$/; // Expresión regular para aceptar solo números

    if (e.target.value === '' || re.test(e.target.value)) {
      handleChange(e);
    }
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("fx", formId); // formId
    myHeaders.append("content-type", "application/json");

    var raw = JSON.stringify({
      name: values.name,
      lastName: values.lastName,
      email: values.email,
      phone: `${values.prefix} ${values.phone}`,
      prefix: values.prefix,
      "privacy-police": true,
      productId: productId, // productId
      formId: formId,
      format: values.format
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      
    };

    fetch("https://api.ivacus.com/x/deliverForm", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    setValues({
      name: '',
      lastName: '',
      email: '',
      phone: '',
      prefix: '0',
      format: 'Presencial'
    })
    setErrors({
      name: '',
      lastName: '',
      email: '',
      phone: '',
      format: ''
    })

    const downloadLink = document.createElement("a");
    downloadLink.href = href;
    downloadLink.download = download;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    if (!redirect) return
    const redirectLink = document.createElement("a");
    redirectLink.href = redirect;
    redirectLink.click();

  };

  return (
    <form
      id="download-pdf"
      className={classes.form}
      onSubmit={handleSubmit}
      style={upMd ? {
        boxShadow: `${shadow ? "0px 4px 8px #7e7777" : undefined}`,
        ...style
      } : {
        boxShadow: `${shadow ? "0px 4px 8px #7e7777" : undefined}`,
      }}
    >
      {title && (
        <h3 className={classes.h3}>
          <InfoOutlinedIcon />
          Inscríbete aquí
        </h3>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '10px', alignItems: 'center' }}>
        <TextField
          className={classes.input}
          variant="filled"
          placeholder="Nombre"
          sx={{ width: "95%" }}
          name="name"
          onChange={handleChange}
          value={values.name}
          error={!!errors.name}
          helperText={errors.name}
          required
          inputProps={{
            maxLength: 255
          }}
        />
        <TextField
          className={classes.input}
          variant="filled"
          placeholder="Apellidos"
          sx={{ width: "95%" }}
          name="lastName"
          onChange={handleChange}
          value={values.lastName}
          error={!!errors.lastName}
          helperText={errors.lastName}
          required
          style={{ marginTop: '3px' }}
          inputProps={{
            maxLength: 255
          }}
        />
        <TextField
          className={classes.input}
          variant="filled"
          placeholder="Email"
          sx={{ width: "95%" }}
          name="email"
          onChange={handleChange}
          value={values.email}
          error={!!errors.email}
          helperText={errors.email}
          required
          style={{ marginTop: '3px' }}
          inputProps={{
            maxLength: 255
          }}
          type="email"
        />
        <TextField
          className={classes.input}
          variant="filled"
          sx={{ width: "95%" }}
          name="prefix"
          value={values.prefix}
          placeholder="País"
          select
          style={{ marginTop: '3px' }}
          onChange={handleChange}
        >
          <MenuItem value="0" sx={{ display: 'none' }}>
            País
          </MenuItem>
          {countries.map((country, index) => (
            <MenuItem key={index} value={country.prefix} sx={{ display: 'flex', alignItems: 'center', lineHeight: '1em', columnGap: '5px', fontFamily: 'Nunito' }}>
              {country.name} ({country.code} {country.prefix} {hasFlag(country.code) ? <img
                height="10"
                alt={country.name}
                src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${country.code}.svg`}
              /> : country.flag}
              )
            </MenuItem>
          ))}
        </TextField>
        <TextField
          className={classes.input}
          variant="filled"
          placeholder="Número de teléfono"
          sx={{ width: "95%" }}
          name="phone"
          onChange={handleInputChange}
          value={values.phone}
          error={!!errors.phone}
          helperText={errors.phone}
          required
          inputProps={{
            inputMode: 'numeric'
          }}
          style={{ marginTop: '3px' }}
        />
         <TextField
          className={classes.input}
          variant="filled"
          placeholder="Número de teléfono"
          sx={{ width: "95%" }}
          name="format"
          onChange={handleChange}
          value={values.format}
          error={!!errors.format}
          helperText={errors.format}
          required
          inputProps={{
            inputMode: 'numeric'
          }}
          style={{ marginTop: '3px' }}
          select
        >
          
          <MenuItem value="Presencial">
            Formato Presencial
          </MenuItem>
          <MenuItem value="Remoto">
            Formato Virtual
          </MenuItem>
        </TextField>

      </div>
      <label className={classes.checkbox}>
        <input
          type="checkbox"
          onClick={(e) => {
            const target = e.target as HTMLInputElement;
            const isChecked = target.checked;
            const otherCheckbox = document.querySelector(`input[type="checkbox"]:not(#${target.id})`) as HTMLInputElement;
            setEnabledSubmit(isChecked && (otherCheckbox ? otherCheckbox.checked : false));
          }}
          id="checkbox1"
        />
        <div className={classes.checkboxText}>
          Consiento el tratamiento de mis datos por Sagardoy Business & Law
          School, para el envío de información comercial personalizada y/o sobre
          actividades, mediante la elaboración de perfiles basados en la
          información obtenida, incluso de terceros, de conformidad con lo
          dispuesto en la{" "}
          <a
            className={classes.a}
            href="https://www.sagardoyschool.com/politica-de-privacidad/"
            target="_blank"
            rel="noreferrer"
          >
            Política de Privacidad
          </a>
          .
        </div>
        
      </label>
      <label className={classes.checkbox}>
        <input
          type="checkbox"
          onClick={(e) => {
            const target = e.target as HTMLInputElement;
            const isChecked = target.checked;
            const otherCheckbox = document.querySelector(`input[type="checkbox"]:not(#${target.id})`) as HTMLInputElement;
            setEnabledSubmit(isChecked && (otherCheckbox ? otherCheckbox.checked : false));
          }}
          id="checkbox2"
        
        />
        <div className={classes.checkboxText}>
        Autorizo a Sagardoy Business & Law School, a retransmitir, hacer <strong>fotografías y grabaciones</strong> –incluidas imágenes y/o voz- (en lo sucesivo “Datos”) para su posterior edición y difusión tanto interna como externamente en los canales determinados por la Comunidad de Madrid. Los Datos podrán ser utilizados en todos los formatos de medios impresos y digitales, entre otros, publicaciones impresas, sitios web, e-marketing, carteles, banners, publicidad, videos y redes sociales, con fines docentes, de investigación y promocionales. Entiendo que los Datos en sitios webs pueden verse en todo el mundo y no solo en España, y que algunos países en el extranjero pueden no brindar el mismo nivel de protección a los derechos de los individuos que la legislación de la UE.
       
          .
        </div>
        
      </label>
      <button

        type="submit"
        className={classes.button}
        style={{
          background: `${enabledSubmit ? "#C70B1F" : "#B3B3B3"}`,
        }}
        disabled={!enabledSubmit}
      >
        {submit}

      </button>
    </form>
  );
};

export default InfoForm2;
