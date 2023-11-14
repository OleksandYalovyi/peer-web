/* eslint-disable max-len */
import React from 'react'
import T from 'prop-types'
import cls from 'classnames'
import styles from './geekwire.module.scss'

function Geekwire({ hovered, width = '172.608', isLight, size }) {
  const renderColor = () => {
    if (hovered) return '#ffffff'
    if (isLight) return '#000000'
    return '#4d4d4d'
  }

  const renderStyle = () => {
    if (size === 'sm') return { transform: 'scale(0.6)' }
    return null
  }

  const fillPreset = {
    fill: renderColor(),
    fillRule: 'evenodd',
  }

  return (
    <svg
      viewBox="0 0 174 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      className={cls({ [styles.hovered]: hovered })}
      style={renderStyle()}
    >
      <g>
        <path
          {...fillPreset}
          d="M101.03 4.8125C101.03 6.01059 101.03 6.96907 101.03 8.16716C100.071 8.16716 98.8721 8.16716 97.9131 8.16716C99.1118 13.918 100.55 19.4292 101.749 24.9405C101.989 23.982 102.228 22.7839 102.468 21.8254C103.906 16.3142 105.345 10.803 106.544 5.05212C106.544 4.8125 106.783 4.8125 107.023 4.8125C108.461 4.8125 109.66 4.8125 111.098 4.8125C111.338 4.8125 111.338 4.8125 111.578 5.05212C113.256 11.5218 114.934 17.9915 116.373 24.7009C116.373 24.7009 116.373 24.9405 116.373 25.1801C116.373 24.9405 116.373 24.9405 116.373 24.9405C117.332 20.6273 118.53 16.3142 119.489 12.2407C119.489 12.0011 119.729 12.0011 119.969 12.0011C124.763 12.0011 129.318 12.0011 134.113 12.0011C134.832 12.0011 135.072 12.2407 135.072 12.7199C135.072 13.1992 135.311 13.6784 135.311 14.1576C135.311 18.7104 135.311 23.2631 135.311 28.0555C135.311 28.7744 135.791 29.2536 136.51 29.2536C136.99 29.2536 137.229 29.2536 137.709 29.2536C137.949 29.2536 137.949 29.2536 137.949 29.4932C137.949 30.4517 137.949 31.4102 137.949 32.129C137.949 32.3687 137.709 32.3687 137.709 32.3687C136.27 32.3687 134.592 32.3687 133.154 32.3687C131.236 32.3687 129.558 32.3687 127.64 32.3687C127.4 32.3687 127.161 32.3687 127.161 31.8894C127.161 31.1706 127.161 30.2121 127.161 29.4932V29.2536C127.64 29.2536 128.119 29.2536 128.599 29.2536C129.318 29.2536 129.558 28.7744 129.558 28.2951V28.0555C129.558 24.4612 129.558 20.6273 129.558 17.0331C129.558 16.5538 129.558 16.3142 129.318 16.0746C129.318 15.1161 128.839 15.1161 128.359 15.1161C127.161 15.1161 125.962 15.1161 125.003 15.1161C124.284 15.1161 123.804 15.5953 123.565 16.3142C122.606 19.6689 121.886 23.0235 120.928 26.3782C120.448 28.0555 119.969 29.9725 119.489 31.6498C119.489 31.8894 119.249 32.129 119.01 32.129C117.092 32.129 114.934 32.129 113.016 32.129C112.777 32.129 112.537 32.129 112.537 31.6498C111.098 26.1386 109.9 20.867 108.461 15.3557V15.1161C108.222 15.5953 108.222 16.0746 107.982 16.5538C106.783 21.5858 105.345 26.6178 104.146 31.6498C104.146 31.8894 103.906 31.8894 103.667 31.8894C101.749 31.8894 99.5913 31.8894 97.6734 31.8894C97.4337 31.8894 97.1939 31.8894 97.1939 31.6498C95.5158 24.4612 93.5979 17.2727 91.9198 9.84449C91.9198 9.60487 91.6801 9.36526 91.6801 9.12564C91.4403 8.40678 90.9609 8.16716 90.2417 8.16716C89.7622 8.16716 89.7622 8.16716 89.7622 7.68792C89.7622 6.72945 89.7622 6.01059 89.7622 5.05212C89.7622 4.8125 89.7622 4.8125 90.0019 4.8125C93.5979 4.8125 96.9542 4.8125 100.55 4.8125C100.79 4.8125 100.79 4.8125 101.03 4.8125Z"
        />
        <path
          {...fillPreset}
          d="M23.1172 13.4386C21.9185 13.4386 20.4801 13.4386 19.2815 13.4386L19.0417 13.199C18.802 12.0009 18.5623 10.8028 18.5623 9.60475C18.5623 9.36513 18.5623 9.36513 18.3225 9.12551C16.1649 8.64627 14.2471 8.40665 12.3292 8.88589C10.8908 9.12551 9.69213 10.084 8.97293 11.2821C7.77427 12.7198 7.2948 14.3971 7.05507 16.0745C6.81534 18.4706 7.05507 21.1064 7.53453 23.5026C8.014 24.9403 8.49347 26.1384 9.4524 27.0969C10.4113 28.0554 11.61 28.5346 13.0484 28.5346C14.2471 28.5346 15.6855 28.5346 16.8841 28.295C17.3636 28.295 17.3636 28.295 17.3636 27.8158C17.3636 26.1384 17.3636 24.7007 17.3636 23.0234C17.3636 23.0234 17.3636 22.7838 17.3636 22.5442C17.1239 22.5442 17.1239 22.5442 17.1239 22.5442C16.4047 22.5442 15.6855 22.5442 14.9663 22.5442C14.7265 22.5442 14.7265 22.5442 14.7265 22.3045C14.7265 21.3461 14.7265 20.3876 14.7265 19.6687C14.7265 19.4291 14.7265 19.4291 14.9663 19.4291C18.3225 19.4291 21.6788 19.4291 25.035 19.4291C25.2748 19.4291 25.2748 19.4291 25.2748 19.6687C25.2748 20.6272 25.2748 21.5857 25.2748 22.5442C25.2748 22.7838 25.2748 22.7838 25.035 22.7838C24.7953 22.7838 24.7953 22.7838 24.5556 22.7838C23.5967 22.7838 23.1172 23.263 23.1172 24.2215C23.1172 26.8573 23.1172 29.2535 23.1172 31.8893C23.1172 32.3685 23.1172 32.3685 22.6377 32.3685C21.9185 32.3685 20.9596 32.3685 20.2404 32.3685C20.0007 32.3685 20.0007 32.3685 19.7609 32.1289L19.5212 31.8893C19.2815 31.6497 19.0417 31.41 18.5623 31.6497C17.6033 31.8893 16.8841 32.3685 15.9252 32.3685C13.2881 32.8478 10.6511 32.6081 8.25373 31.8893C4.65774 30.6912 2.26041 28.0554 1.06174 24.4611C0.582275 22.0649 0.582275 19.9083 0.582275 17.5122C0.582275 15.3556 1.06174 13.199 2.02067 11.2821C3.45907 8.40665 5.61667 6.4897 8.7332 5.29161C10.6511 4.81237 12.5689 4.57275 14.4868 4.57275C15.9252 4.57275 17.1239 4.81237 18.5623 4.81237C18.802 4.81237 19.2815 4.81237 19.5212 4.81237C20.7199 4.81237 21.6788 4.81237 22.8775 4.81237C23.1172 4.81237 23.1172 4.81237 23.1172 5.05199C23.1172 7.92742 23.1172 10.5632 23.1172 13.4386Z"
        />
        <path
          {...fillPreset}
          d="M76.0986 21.5856C76.3384 21.3459 76.3384 21.3459 76.3384 21.3459C78.0165 19.9082 79.4549 18.2309 81.133 16.7932C81.3728 16.5536 81.6125 16.3139 81.6125 16.0743C81.8522 15.5951 81.6125 15.1158 81.133 15.1158C80.8933 15.1158 80.6536 15.1158 80.4138 15.1158V14.8762C80.4138 13.9178 80.4138 12.9593 80.4138 12.0008C80.4138 11.7612 80.4138 11.7612 80.6536 11.7612C83.5304 11.7612 86.4072 11.7612 89.284 11.7612C89.5237 11.7612 89.5237 11.7612 89.5237 12.0008C89.5237 12.9593 89.5237 14.1574 89.5237 15.1158C89.0442 15.1158 88.8045 15.1158 88.325 15.1158C87.6058 15.1158 87.1264 15.3555 86.6469 15.8347C85.2085 17.2724 83.7701 18.4705 82.3317 19.9082C82.092 20.1478 82.092 20.1478 82.3317 20.3875C84.0098 22.7836 85.9277 25.4195 87.6058 27.8156C87.8456 28.0553 88.0853 28.2949 88.0853 28.5345C88.325 29.0137 88.8045 29.0137 89.284 29.0137V29.2533C89.284 30.2118 89.284 30.9307 89.284 31.8892C89.284 32.1288 89.284 32.1288 89.0442 32.1288C87.3661 32.1288 85.688 32.1288 84.0098 32.1288C83.7701 32.1288 83.7701 31.8892 83.5304 31.8892C81.8522 29.2533 80.1741 26.8572 78.2562 24.2214C78.2562 24.2214 78.0165 23.9817 78.0165 23.7421C77.2973 24.461 76.8178 24.9402 76.0986 25.4195C75.8589 25.6591 75.6192 26.1383 75.6192 26.3779C75.6192 27.0968 75.6192 27.576 75.6192 28.2949C75.6192 28.5345 75.6192 28.5345 75.8589 28.5345C76.3384 28.5345 77.0576 28.5345 77.537 28.5345C77.537 28.7741 77.537 28.7741 77.537 28.7741C77.537 29.7326 77.537 30.4514 77.537 31.4099C77.537 31.6495 77.537 31.6495 77.2973 31.6495C74.1808 31.6495 71.0642 31.6495 67.708 31.6495C67.4683 31.6495 67.4682 31.6495 67.4682 31.4099C67.4682 30.4514 67.4682 29.7326 67.4682 28.7741C67.4682 28.5345 67.4683 28.5345 67.708 28.5345C68.1874 28.5345 68.4272 28.5345 68.9066 28.5345C69.3861 28.5345 69.6258 28.0553 69.8656 27.576C69.8656 27.3364 69.8656 27.0968 69.8656 26.8572C69.8656 20.8667 69.8656 15.1158 69.8656 9.12538C69.8656 8.88576 69.8656 8.40652 69.6258 8.16691C69.3861 7.92729 69.1464 7.68767 68.6669 7.68767C68.1874 7.68767 67.9477 7.68767 67.4682 7.68767C67.2285 7.68767 67.2285 7.68767 67.2285 7.44805C67.2285 6.48958 67.2285 5.5311 67.2285 4.57263C67.2285 4.33301 67.2285 4.33301 67.4682 4.33301C69.6258 4.33301 72.0232 4.33301 74.1808 4.33301C75.1397 4.33301 75.3794 4.57263 75.3794 5.5311C75.3794 5.77072 75.3794 5.77072 75.3794 6.01034C75.3794 11.0423 75.3794 15.8347 75.3794 20.8667C76.0986 21.3459 76.0986 21.5856 76.0986 21.5856Z"
        />
        <path
          {...fillPreset}
          d="M159.526 23.0233C159.526 24.4611 159.766 25.6592 160.485 26.6176C161.204 27.8157 162.163 28.5346 163.601 28.7742C164.56 29.0138 165.279 29.0138 166.238 28.7742C167.437 28.5346 168.396 28.0553 169.115 27.0969C169.355 26.8572 169.595 26.6176 170.074 26.6176C171.033 26.6176 171.752 26.6176 172.711 26.6176V26.8572C172.711 27.8157 172.711 29.0138 172.711 29.9723C172.711 30.2119 172.711 30.2119 172.471 30.4515C170.793 31.41 169.115 31.8892 167.197 32.1289C165.279 32.3685 163.601 32.3685 161.683 32.1289C159.046 31.6496 156.889 30.6911 155.45 28.5346C154.491 27.0969 154.012 25.4195 153.772 23.7422C153.532 22.0649 153.532 20.3875 154.012 18.7102C154.971 14.6367 158.087 12.0009 162.163 11.5217C163.841 11.282 165.519 11.282 166.958 11.7613C169.834 12.4801 171.752 14.3971 172.711 17.2725C173.191 18.7102 173.191 20.1479 173.191 21.8253C173.191 22.0649 173.191 22.5441 173.191 22.7837C173.191 23.0233 173.191 23.263 172.711 23.263C170.793 23.263 168.875 23.263 166.958 23.263C164.56 23.263 162.163 23.263 159.526 23.263C159.766 23.0233 159.766 23.0233 159.526 23.0233ZM167.677 19.6687C167.677 19.4291 167.677 19.4291 167.677 19.1894C167.677 18.7102 167.437 17.9914 167.437 17.5121C167.437 17.0329 167.197 16.5536 166.958 16.0744C166.478 15.3556 165.759 14.6367 164.8 14.6367C163.601 14.3971 162.403 14.6367 161.444 15.3556C160.245 16.314 159.766 17.9914 159.526 19.4291C162.163 19.6687 165.04 19.6687 167.677 19.6687Z"
        />
        <path
          {...fillPreset}
          d="M60.2762 23.0235C58.1186 23.0235 55.961 23.0235 53.8034 23.0235C53.324 23.0235 53.324 23.0235 53.324 23.5027C53.324 24.7008 53.5637 25.6593 54.2829 26.6177C55.0021 27.8158 55.961 28.5347 57.3994 28.7743C58.3584 29.0139 59.3173 29.0139 60.0365 28.7743C61.2351 28.5347 62.1941 27.8158 62.9133 26.8574C63.153 26.6177 63.153 26.6177 63.3927 26.6177C64.3517 26.6177 65.0709 26.6177 66.0298 26.6177C66.2695 26.6177 66.2695 26.6177 66.2695 26.8574C66.2695 28.0555 66.2695 29.0139 66.2695 30.212C66.2695 30.4516 66.2695 30.4516 66.0298 30.6913C64.3517 31.6497 62.9133 32.129 60.9954 32.3686C58.8378 32.6082 56.6802 32.6082 54.5226 32.129C50.6869 31.4101 48.0498 28.5347 47.3306 24.7008C47.0909 22.5442 47.0909 20.3877 47.8101 18.2311C49.0088 14.6368 51.4061 12.7199 55.0021 12.001C56.6802 11.7614 58.5981 11.7614 60.2762 12.001C63.3927 12.7199 65.3106 14.3972 66.2695 17.5122C66.749 18.9499 66.749 20.3877 66.749 21.8254C66.749 22.065 66.749 22.5442 66.749 22.7838C66.749 23.0235 66.749 23.2631 66.2695 23.2631C64.3517 23.2631 62.6735 23.2631 60.7557 23.2631C60.9954 23.0235 60.516 23.0235 60.2762 23.0235ZM61.4749 19.6688C61.4749 18.2311 61.2352 17.2726 60.7557 16.3141C60.2762 15.5953 59.7968 15.116 59.0776 14.8764C58.5981 14.8764 58.1186 14.6368 57.3994 14.8764C56.4405 14.8764 55.7213 15.3557 55.0021 15.8349C54.0432 16.7934 53.8034 17.9915 53.5637 19.1896C53.5637 19.4292 53.5637 19.6688 53.5637 19.9084C56.2008 19.6688 58.8378 19.6688 61.4749 19.6688Z"
        />
        <path
          {...fillPreset}
          d="M32.7071 23.0233C32.7071 24.461 33.1866 25.8987 34.1455 27.3365C34.8647 28.2949 35.8236 28.7742 36.7826 29.0138C37.7415 29.2534 38.7004 29.2534 39.8991 29.0138C41.0978 28.7742 41.817 28.0553 42.5362 27.0968C42.7759 26.8572 42.7759 26.8572 43.0156 26.8572C43.9746 26.8572 44.6938 26.8572 45.6527 26.8572H45.8924V27.0968C45.8924 28.0553 45.8924 29.2534 45.8924 30.2119C45.8924 30.4515 45.8924 30.4515 45.6527 30.6911C43.9746 31.6496 42.2964 32.1288 40.6183 32.3685C38.221 32.6081 36.0634 32.6081 33.9058 32.1288C30.5495 31.1704 28.3919 29.0138 27.6727 25.6591C26.9535 22.7837 26.9535 19.9083 28.1522 17.2725C29.3508 14.6367 31.2687 12.9593 33.9058 12.0009C36.3031 11.282 38.7004 11.282 40.858 11.7612C43.7348 12.4801 45.413 14.1574 46.3719 17.0329C46.6116 18.231 46.8514 19.429 46.8514 20.6271C46.8514 21.346 46.8514 22.0648 46.8514 22.7837C46.8514 23.2629 46.8514 23.2629 46.3719 23.2629C43.0156 23.2629 39.4196 23.2629 36.0634 23.2629C35.1044 23.2629 34.3852 23.2629 33.4263 23.2629C32.9468 23.0233 32.7071 23.0233 32.7071 23.0233ZM32.7071 19.6687C35.5839 19.6687 37.9812 19.6687 40.6183 19.6687C40.858 19.6687 40.858 19.6687 40.858 19.429C40.858 18.4706 40.6183 17.5121 40.3786 16.7932C40.1388 16.314 39.8991 16.0744 39.6594 15.5951C38.9402 14.8763 37.9812 14.6367 37.0223 14.6367C35.5839 14.6367 34.3852 15.3555 33.666 16.7932C32.9468 17.7517 32.7071 18.7102 32.7071 19.6687Z"
        />
        <path
          {...fillPreset}
          d="M149.937 29.014C149.937 29.4932 149.937 29.9725 149.937 30.4517C149.937 30.931 149.937 31.4102 149.937 31.8894C149.937 32.1291 149.937 32.1291 149.697 32.1291C147.779 32.1291 145.861 32.1291 143.943 32.1291C142.505 32.1291 141.067 32.1291 139.628 32.1291C139.388 32.1291 139.149 32.1291 139.149 31.6498C139.149 30.6913 139.149 29.7329 139.149 28.7744C139.628 28.7744 140.108 28.7744 140.587 28.7744C141.067 28.7744 141.546 28.2952 141.546 27.5763C141.546 26.1386 141.546 24.7009 141.546 23.2632C141.546 20.867 141.546 18.4708 141.546 16.0746C141.546 15.3557 141.067 14.8765 140.347 14.6369C140.108 14.6369 139.628 14.6369 139.149 14.6369C138.909 14.6369 138.909 14.6369 138.909 14.3973C138.909 13.4388 138.909 12.4803 138.909 11.5218C138.909 11.2822 138.909 11.2822 139.149 11.2822C141.306 11.2822 143.464 11.2822 145.861 11.2822C146.341 11.2822 146.82 11.5218 146.82 12.0011C146.82 12.9596 146.82 13.6784 147.06 14.1577C147.06 14.1577 147.06 14.3973 147.06 14.6369C147.3 14.3973 147.3 14.3973 147.3 14.1577C148.259 13.1992 149.217 12.2407 150.656 11.7615C151.615 11.5218 152.574 11.2822 153.533 11.5218C153.772 11.5218 153.772 11.5218 153.772 11.7615C153.772 12.9596 153.772 14.3973 153.772 15.5954C153.053 15.5954 152.574 15.5954 151.855 15.5954C150.176 15.5954 148.738 16.0746 147.3 16.5538C147.06 16.5538 147.06 16.7935 147.06 17.0331C147.06 20.6274 147.06 24.4613 147.06 28.0555C147.06 28.5348 147.06 28.5348 147.539 28.5348C148.259 29.014 148.978 29.014 149.937 29.014Z"
        />
        <path
          {...fillPreset}
          d="M126.921 6.48974C126.921 3.61431 129.318 0.978504 132.195 0.738886C135.072 0.499267 137.709 2.41622 138.188 5.53126C138.428 7.20859 137.948 8.6463 136.989 9.8444C136.75 10.3236 136.51 10.3236 136.03 10.084C135.791 9.8444 135.791 9.60478 135.791 9.36516C136.03 8.88592 136.27 8.6463 136.51 8.16707C137.709 5.29164 135.791 2.41622 132.674 2.1766C129.797 1.93698 127.16 4.57279 127.88 7.68783C127.88 8.16707 128.119 8.40668 128.359 8.88592C128.359 9.12554 128.599 9.12554 128.599 9.36516C128.838 9.60478 128.838 10.084 128.599 10.084C128.359 10.3236 127.88 10.3236 127.64 10.084C126.921 9.36516 126.681 8.40668 126.441 7.44821C126.921 6.96897 126.921 6.72935 126.921 6.48974Z"
        />
        <path
          {...fillPreset}
          d="M132.676 9.12554C131.238 9.12554 129.799 8.16706 129.799 6.72935C129.56 5.29164 130.758 3.85393 132.197 3.85393C133.875 3.61431 135.073 4.8124 135.313 6.25011C135.313 7.68783 134.354 8.88592 132.676 9.12554Z"
        />
      </g>
    </svg>
  )
}

Geekwire.propTypes = {
  hovered: T.bool,
  width: T.string,
  isLight: T.bool,
  size: T.string,
}
export default Geekwire
