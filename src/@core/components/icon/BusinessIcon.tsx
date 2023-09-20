import { SvgIcon } from "@mui/material";

function BusinessIcon({color='#45b174', width = 20, height=20}: any) {
  return (
    <SvgIcon viewBox="0 0 1000 1000" width={width} height={height}>
      <g>
        <g>
          <path fill={color} d="M906.25,941.42H93.75C42.05,941.42,0,899.36,0,847.67V519.54c0-17.26,13.99-31.25,31.25-31.25
            s31.25,13.99,31.25,31.25v328.13c0,17.22,14.03,31.25,31.25,31.25h812.5c17.22,0,31.25-14.03,31.25-31.25V519.54
            c0-17.26,13.99-31.25,31.25-31.25c17.26,0,31.25,13.99,31.25,31.25v328.13C1000,899.36,957.95,941.42,906.25,941.42z"/>
        </g>
        <g>
          <g>
            <path fill={color} d="M906.25,232.09H93.75C42.05,232.09,0,274.15,0,325.84v48.68c0,40.42,25.74,76.14,64.09,88.93l357.78,119.28
              v-45.2c0-6.89,1.68-13.39,4.52-19.2L83.85,404.18C71.07,399.92,62.5,388,62.5,374.53v-48.68c0-17.22,14.03-31.25,31.25-31.25
              h812.5c17.22,0,31.25,14.03,31.25,31.25v48.68c0,13.47-8.57,25.4-21.35,29.66l-342.54,114.2c2.88,5.77,4.52,12.27,4.52,19.2v45.2
              L935.91,463.5c38.35-12.78,64.09-48.51,64.09-88.93v-48.73C1000,274.15,957.95,232.09,906.25,232.09z"/>
          </g>
        </g>
        <path fill={color} d="M534.91,681.82h-69.82c-41.06,0-74.47-33.4-74.47-74.47v-69.82c0-41.06,33.4-74.47,74.47-74.47h69.82
          c41.06,0,74.47,33.4,74.47,74.47v69.82C609.38,648.42,575.97,681.82,534.91,681.82z M465.09,525.57c-6.59,0-11.97,5.38-11.97,11.97
          v69.82c0,6.59,5.38,11.97,11.97,11.97h69.82c6.59,0,11.97-5.38,11.97-11.97v-69.82c0-6.59-5.38-11.97-11.97-11.97
          C534.91,525.57,465.09,525.57,465.09,525.57z"/>
        <path fill={color} d="M656.25,199.21c-17.26,0-31.25-13.99-31.25-31.25v-15.62c0-17.22-14.03-31.25-31.25-31.25h-187.5
          c-17.22,0-31.25,14.03-31.25,31.25v15.63c0,17.26-13.99,31.25-31.25,31.25s-31.25-13.99-31.25-31.25v-15.62
          c0-51.7,42.05-93.75,93.75-93.75h187.5c51.7,0,93.75,42.05,93.75,93.75v15.62C687.5,185.22,673.51,199.21,656.25,199.21z"/>
      </g>
    </SvgIcon>
  )
}

export default BusinessIcon;