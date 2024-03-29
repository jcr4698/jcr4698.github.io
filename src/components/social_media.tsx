type MediaProp = {
	media: Array<string>;
}

const logos = {
	"linkedin":
		<div className="media-logo-container">
			<svg className="media-logo" version="1.1" viewBox="-4 -3 28 28">
				<path
					d="M5 3c0 1.062-0.71 1.976-2.001 1.976-1.215 0-1.999-0.862-1.999-1.924 0-1.090 0.76-2.052 2-2.052s1.976 0.91 2 2zM1 19v-13h4v13h-4z">
				</path>
				<path
					d="M7 10.444c0-1.545-0.051-2.836-0.102-3.951h3.594l0.178 1.723h0.076c0.506-0.811 1.746-2 3.822-2 2.532 0 4.432 1.695 4.432 5.342v7.442h-4v-6.861c0-1.594-0.607-2.81-2-2.81-1.062 0-1.594 0.86-1.873 1.569-0.102 0.254-0.127 0.608-0.127 0.963v7.139h-4v-8.556z">
				</path>
			</svg>
		</div>,
	"twitter":
		<div className="media-logo-container">
			<svg className="media-logo" version="1.1" viewBox="-3 -3 25 25">
				<path
					d="M17.316 6.246c0.008 0.162 0.011 0.326 0.011 0.488 0 4.99-3.797 10.742-10.74 10.742-2.133 0-4.116-0.625-5.787-1.697 0.296 0.035 0.596 0.053 0.9 0.053 1.77 0 3.397-0.604 4.688-1.615-1.651-0.031-3.046-1.121-3.526-2.621 0.23 0.043 0.467 0.066 0.71 0.066 0.345 0 0.679-0.045 0.995-0.131-1.727-0.348-3.028-1.873-3.028-3.703 0-0.016 0-0.031 0-0.047 0.509 0.283 1.092 0.453 1.71 0.473-1.013-0.678-1.68-1.832-1.68-3.143 0-0.691 0.186-1.34 0.512-1.898 1.861 2.285 4.644 3.787 7.781 3.945-0.064-0.277-0.097-0.564-0.097-0.861 0-2.084 1.689-3.773 3.774-3.773 1.086 0 2.067 0.457 2.756 1.191 0.859-0.17 1.667-0.484 2.397-0.916-0.282 0.881-0.881 1.621-1.66 2.088 0.764-0.092 1.49-0.293 2.168-0.594-0.506 0.758-1.146 1.422-1.884 1.953z">
				</path>
			</svg>
		</div>,
	"github":
		<div className="media-logo-container">
			<svg className="media-logo" version="1.1" viewBox="-4 -4 40 40">
				<path
					d="M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z">
				</path>
			</svg>
		</div>,
	"codepen":
		<div className="media-logo-container">
			<svg className="media-logo" version="1.1" viewBox="-4 -2 38 38">
				<path
					d="M29.555 11.501l-14-9.333c-0.336-0.224-0.774-0.224-1.109 0l-14 9.333c-0.278 0.185-0.445 0.498-0.445 0.832v9.333c0 0.334 0.167 0.647 0.445 0.832l14 9.333c0.168 0.112 0.361 0.168 0.555 0.168s0.387-0.056 0.555-0.168l14-9.333c0.278-0.185 0.445-0.498 0.445-0.832v-9.333c0-0.334-0.167-0.647-0.445-0.832zM15 20.465l-5.197-3.465 5.197-3.465 5.197 3.465-5.197 3.465zM16 11.798v-6.93l11.197 7.465-5.197 3.465-6-4zM14 11.798l-6 4-5.197-3.465 11.197-7.465v6.93zM6.197 17l-4.197 2.798v-5.596l4.197 2.798zM8 18.202l6 4v6.93l-11.197-7.465 5.197-3.465zM16 22.202l6-4 5.197 3.465-11.197 7.465v-6.93zM23.803 17l4.197-2.798v5.596l-4.197-2.798z">
				</path>
			</svg>
		</div>,
	"email":
		<div className="media-logo-container">
			<svg className="media-logo" version="1.1" viewBox="-3 -2 35 35">
				<path
					d="M 4 5 C 2.9069372 5 2 5.9069372 2 7 L 2 23 C 2 24.093063 2.9069372 25 4 25 L 26 25 C 27.093063 25 28 24.093063 28 23 L 28 7 C 28 5.9069372 27.093063 5 26 5 L 4 5 z M 6.6992188 7 L 23.300781 7 L 15 13.134766 L 6.6992188 7 z M 5 9.4746094 L 15 16.865234 L 25 9.4746094 L 25 23 L 5 23 L 5 9.4746094 z">
				</path>
			</svg>
		</div>,
	"scratch":
		<div className="media-logo-container">
			<svg className="media-logo" version="1.1" viewBox="-2 -2 28 28">
				<path
					d="M19.78,14.46c-0.17-0.94-0.53-1.82-1.07-2.63c0.35-0.64,0.53-1.37,0.53-2.11V4.44c0-2.45-1.98-4.44-4.42-4.44 c-1.2,0-2.33,0.48-3.16,1.34C11.42,1.35,11.21,1.37,11,1.4C7.99,1.83,5.64,4.27,5.16,7.46c-0.23,1.52-0.04,3.03,0.56,4.41 c-0.68,0.8-1.07,1.82-1.07,2.9c0,1.42,0.02,2.57,0.05,3.44c0.03,0.88,0.06,1.47,0.09,1.78C5.02,22.28,6.95,24,9.28,24l0.31-0.01 c1.17-0.11,2.24-0.67,2.98-1.57c0.06-0.06,0.11-0.13,0.16-0.19c0.78,0.02,1.57-0.08,2.31-0.31 C18.4,20.92,20.39,17.78,19.78,14.46z M14.1,18.65c-1.23,0.37-2.76,0.16-4.06-0.85c0.03,1.2,0.08,1.73,0.08,1.74 c0.05,0.54-0.36,1.03-0.91,1.08H9.12c-0.51,0-0.94-0.39-0.99-0.9C8.12,19.66,8,18.25,8,14.75c0-0.48,0.34-0.89,0.8-0.98 c0.47-0.09,0.94,0.15,1.12,0.59c0.89,2.12,2.45,2.72,3.61,2.38c0.53-0.16,1.12-0.6,0.99-1.31c-0.16-0.85-1.09-1.59-3.32-2.65 c-1.97-0.93-3.03-2.87-2.72-4.94c0.26-1.72,1.44-2.98,3-3.21c0.59-0.08,1.51-0.04,2.4,0.69V4.25c0-0.55,0.44-1,1-1 c0.55,0,1,0.45,1,1v5.37c0,0.53-0.41,0.96-0.93,1c-0.53,0.04-0.99-0.33-1.06-0.85c-0.01-0.04-0.58-3.4-2.12-3.15 c-0.82,0.11-1.21,0.86-1.31,1.52c-0.14,0.89,0.2,2.17,1.59,2.83c2.49,1.18,4.1,2.28,4.43,4.1 C16.78,16.67,15.79,18.15,14.1,18.65z">
				</path>
			</svg>
		</div>,
	"facebook":
		<div className="media-logo-container">
			<svg className="media-logo" version="1.1" viewBox="0 0 32 32">
				<path
					d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z">
				</path>
			</svg>
		</div>,
	"instagram":
		<div className="media-logo-container">
			<svg className="media-logo" version="1.1" viewBox="-1 -1 32 32">
				<path
					d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z">
				</path>
			</svg>
		</div>,
	"discord":
		<div className="media-logo-container">
			<svg className="media-logo" version="1.1" viewBox="-2 -2 34 34">
				<path
					d="M25.12,6.946c-2.424-1.948-6.257-2.278-6.419-2.292c-0.256-0.022-0.499,0.123-0.604,0.357 c-0.004,0.008-0.218,0.629-0.425,1.228c2.817,0.493,4.731,1.587,4.833,1.647c0.478,0.278,0.638,0.891,0.359,1.368 C22.679,9.572,22.344,9.75,22,9.75c-0.171,0-0.343-0.043-0.501-0.135C21.471,9.598,18.663,8,15.002,8 C11.34,8,8.531,9.599,8.503,9.615C8.026,9.892,7.414,9.729,7.137,9.251C6.86,8.775,7.021,8.164,7.497,7.886 c0.102-0.06,2.023-1.158,4.848-1.65c-0.218-0.606-0.438-1.217-0.442-1.225c-0.105-0.235-0.348-0.383-0.604-0.357 c-0.162,0.013-3.995,0.343-6.451,2.318C3.564,8.158,1,15.092,1,21.087c0,0.106,0.027,0.209,0.08,0.301 c1.771,3.11,6.599,3.924,7.699,3.959c0.007,0.001,0.013,0.001,0.019,0.001c0.194,0,0.377-0.093,0.492-0.25l1.19-1.612 c-2.61-0.629-3.99-1.618-4.073-1.679c-0.444-0.327-0.54-0.953-0.213-1.398c0.326-0.443,0.95-0.541,1.394-0.216 C7.625,20.217,10.172,22,15,22c4.847,0,7.387-1.79,7.412-1.808c0.444-0.322,1.07-0.225,1.395,0.221 c0.324,0.444,0.23,1.066-0.212,1.392c-0.083,0.061-1.456,1.048-4.06,1.677l1.175,1.615c0.115,0.158,0.298,0.25,0.492,0.25 c0.007,0,0.013,0,0.019-0.001c1.101-0.035,5.929-0.849,7.699-3.959c0.053-0.092,0.08-0.195,0.08-0.301 C29,15.092,26.436,8.158,25.12,6.946z M11,19c-1.105,0-2-1.119-2-2.5S9.895,14,11,14s2,1.119,2,2.5S12.105,19,11,19z M19,19 c-1.105,0-2-1.119-2-2.5s0.895-2.5,2-2.5s2,1.119,2,2.5S20.105,19,19,19z">
				</path>
			</svg>
		</div>
}

function SocialMedia({ media }: MediaProp) {

	// console.log(media);

	return (
		<div className="media-wrapper">
			<div className="media-grid">
				<a className="media-container" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jan-carlos-rubio-sanchez/">
					{logos["linkedin"]}
					<span className="media-link">
						in/jan-carlos-rubio-sanchez
					</span>
				</a>
				<a className="media-container" target="_blank" rel="noreferrer" href="https://twitter.com/Programmed_Bean">
					{logos["twitter"]}
					<span className="media-link">
						@Programmed_Bean
					</span>
				</a>
				<a className="media-container" target="_blank" rel="noreferrer" href="https://github.com/jcr4698">
					{logos["github"]}
					<span className="media-link">
						jcr4698
					</span>
				</a>
				<a className="media-container" target="_blank" rel="noreferrer" href="https://codepen.io/jcr4698">
					{logos["codepen"]}
					<span className="media-link">
						jcr4698
					</span>
				</a>
				<a className="media-container" target="_blank" rel="noreferrer" href="https://www.facebook.com/alanjan.rubio">
					{logos["facebook"]}
					<span className="media-link">
						jan.rubio
					</span>
				</a>
				<a className="media-container" target="_blank" rel="noreferrer" href="mailto:jcaj750@gmail.com">
					{logos["email"]}
					<span className="media-link">
						jcaj750@gmail.com
					</span>
				</a>
				<a className="media-container" target="_blank" rel="noreferrer" href="https://www.instagram.com/jancarlosrubiosanchez">
					{logos["instagram"]}
					<span className="media-link">
						jancarlosrubiosanchez
					</span>
				</a>
				<a className="media-container" target="_blank" rel="noreferrer" href="https://discordapp.com/users/242057894730792961">
					{logos["discord"]}
					<span className="media-link">
						programmedbean
					</span>
				</a>
				<a className="media-container" target="_blank" rel="noreferrer" href="https://scratch.mit.edu/users/JanDaNerd/">
					{logos["scratch"]}
					<span className="media-link">
						JanDaNerd
					</span>
				</a>
			</div>
		</div>
	)
}

export { SocialMedia };
