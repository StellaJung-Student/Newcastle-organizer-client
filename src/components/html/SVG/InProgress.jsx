import React from 'react';

const InProgress = ({size, fill}) => {
    return (
        <svg viewBox="0 -26 511.9992 511"
             height={`${size}rem`}
             width={`${size}rem`}
             fill={fill} xmlns="http://www.w3.org/2000/svg">
            <path
                d="m506.929688 238.9375c-6.207032-5.484375-15.6875-4.894531-21.171876 1.3125l-.242187.273438v-10.511719c0-61.304688-23.875-118.941407-67.226563-162.292969-43.347656-43.347656-100.984374-67.21875-162.289062-67.21875-37.03125 0-73.828125 9.03125-106.417969 26.113281-31.53125 16.527344-59.207031 40.570313-80.035156 69.535157-4.835937 6.722656-3.304687 16.097656 3.421875 20.933593 6.726562 4.839844 16.101562 3.308594 20.9375-3.417969 18.117188-25.195312 42.1875-46.109374 69.605469-60.480468 28.308593-14.839844 60.289062-22.683594 92.488281-22.683594 110.011719 0 199.515625 89.503906 199.515625 199.515625v10.511719l-.246094-.273438c-5.484375-6.210937-14.964843-6.796875-21.171875-1.3125-6.210937 5.484375-6.796875 14.964844-1.3125 21.171875l26.484375 29.984375c2.847657 3.222656 6.941407 5.066406 11.242188 5.066406s8.394531-1.84375 11.242187-5.066406l26.484375-29.984375c5.488281-6.210937 4.902344-15.691406-1.308593-21.175781zm0 0"/>
            <path
                d="m439.03125 342.890625c-6.726562-4.835937-16.097656-3.308594-20.9375 3.417969-18.117188 25.191406-42.1875 46.105468-69.605469 60.480468-28.308593 14.839844-60.292969 22.683594-92.488281 22.683594-110.011719 0-199.515625-89.503906-199.515625-199.515625v-10.511719l.246094.277344c5.484375 6.207032 14.964843 6.796875 21.171875 1.308594 6.210937-5.484375 6.796875-14.964844 1.3125-21.171875l-26.484375-29.984375c-2.851563-3.222656-6.941407-5.070312-11.242188-5.070312s-8.398437 1.847656-11.242187 5.070312l-26.488282 29.984375c-5.484374 6.210937-4.898437 15.6875 1.3125 21.171875 2.851563 2.523438 6.394532 3.761719 9.925782 3.761719 4.148437 0 8.28125-1.714844 11.246094-5.070313l.242187-.277344v10.511719c0 61.308594 23.875 118.941407 67.226563 162.292969 43.347656 43.351562 100.984374 67.222656 162.289062 67.222656 37.027344 0 73.828125-9.03125 106.417969-26.113281 31.527343-16.527344 59.203125-40.574219 80.03125-69.535156 4.835937-6.726563 3.308593-16.097657-3.417969-20.933594zm0 0"/>
            <path
                d="m256 289.957031c33.082031 0 60-26.914062 60-60 0-33.082031-26.917969-60-60-60-33.085938 0-60 26.917969-60 60 0 33.085938 26.914062 60 60 60zm0-90c16.542969 0 30 13.457031 30 30s-13.457031 30-30 30-30-13.457031-30-30 13.457031-30 30-30zm0 0"/>
            <path
                d="m108.046875 268.390625c-1.03125 3.839844-.492187 7.933594 1.5 11.378906l30 51.964844c1.988281 3.445313 5.265625 5.957031 9.105469 6.988281 3.84375 1.027344 7.9375.492188 11.382812-1.5l22.058594-12.734375c8.808594 6.882813 18.570312 12.53125 28.90625 16.726563v25.433594c0 8.28125 6.714844 15 15 15h60c8.28125 0 15-6.71875 15-15v-25.433594c10.335938-4.195313 20.097656-9.84375 28.90625-16.726563l22.058594 12.734375c3.441406 1.988282 7.539062 2.527344 11.378906 1.5 3.84375-1.03125 7.121094-3.542968 9.109375-6.988281l30-51.964844c1.988281-3.445312 2.527344-7.539062 1.5-11.378906-1.03125-3.84375-3.546875-7.121094-6.988281-9.109375l-22.105469-12.761719c.757813-5.476562 1.140625-11.019531 1.140625-16.5625 0-5.609375-.390625-11.207031-1.167969-16.746093l22.132813-12.777344c3.445312-1.988282 5.957031-5.265625 6.988281-9.109375 1.027344-3.84375.488281-7.9375-1.5-11.382813l-30-51.960937c-4.140625-7.171875-13.316406-9.628907-20.488281-5.488281l-22.203125 12.820312c-8.773438-6.832031-18.484375-12.441406-28.761719-16.613281v-25.632813c0-8.28125-6.714844-15-15-15h-60c-8.285156 0-15 6.71875-15 15v25.632813c-10.273438 4.171875-19.988281 9.78125-28.757812 16.613281l-22.207032-12.820312c-7.171875-4.144532-16.347656-1.683594-20.488281 5.488281l-30 51.960937c-1.988281 3.445313-2.527344 7.542969-1.5 11.382813 1.03125 3.84375 3.542969 7.121093 6.988281 9.109375l22.132813 12.777344c-.777344 5.539062-1.167969 11.136718-1.167969 16.746093 0 5.542969.382812 11.082031 1.140625 16.5625l-22.101563 12.761719c-3.449218 1.988281-5.960937 5.265625-6.992187 9.109375zm60.371094-17.632813c-1.605469-6.785156-2.417969-13.785156-2.417969-20.800781 0-7.066406.824219-14.113281 2.453125-20.949219 1.539063-6.453124-1.34375-13.152343-7.089844-16.46875l-18.335937-10.585937 15-25.980469 18.398437 10.625c5.742188 3.3125 12.980469 2.464844 17.800781-2.085937 10.207032-9.640625 22.671876-16.839844 36.050782-20.820313 6.359375-1.894531 10.722656-7.742187 10.722656-14.378906v-21.246094h30v21.246094c0 6.636719 4.359375 12.484375 10.71875 14.378906 13.382812 3.980469 25.847656 11.183594 36.054688 20.820313 4.820312 4.550781 12.058593 5.398437 17.796874 2.085937l18.402344-10.625 15 25.980469-18.335937 10.585937c-5.746094 3.316407-8.628907 10.015626-7.09375 16.46875 1.628906 6.835938 2.457031 13.882813 2.457031 20.949219 0 7.015625-.816406 14.015625-2.417969 20.800781-1.523437 6.449219 1.359375 13.128907 7.097657 16.441407l18.292968 10.5625-15 25.980469-18.265625-10.546876c-5.75-3.320312-13-2.464843-17.820312 2.101563-10.226563 9.691406-22.734375 16.929687-36.164063 20.929687-6.363281 1.890626-10.722656 7.738282-10.722656 14.375v21.046876h-30v-21.046876c0-6.636718-4.359375-12.484374-10.71875-14.375-13.433594-4-25.941406-11.234374-36.167969-20.929687-4.820312-4.566406-12.066406-5.417969-17.816406-2.101563l-18.269531 10.546876-15-25.980469 18.292968-10.5625c5.734376-3.3125 8.621094-9.992188 7.097657-16.441407zm0 0"/>
        </svg>
    )
}

export default InProgress;