import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { hexToRGB, containsTextContent, getAllChildren } from './../utils/testUtils.js';
import ServicesView from './../components/ServicesView.jsx';

/* ======================================= Consts & Vars ================================= */
let container;

const serviceViewOrder = ['services-view-heading-container', 'it-cloud-view', 'accounting-view', 'hr-admin-view', 'sales-view', 'customer-view', 'security-view'];

const itCloud = {
	heading: 'ASSETS',
	text: 'Inventory Management',
	buttonText: 'G-Book',
	background: '#FFFFFF',
	icon: 'it-cloud-icon.svg',
};

const accounting = {
	heading: 'ACCOUNTING',
	text: 'Accounting',
	buttonText: 'G-Book',
	background: '#F4F4F4',
	icon: 'accounting-icon.svg',
};

const hrAdmin = {
	heading: 'HR & ADMIN',
	text: ['Webmail', 'E-Approval', 'E-Document', 'E-Check in.out', 'Co-work/Project'],
	buttonText: ['E-office', 'E-office', 'E-office', 'E-office', 'E-office'],
	background: '#FFFFFF',
	icon: 'hr-admin-icon.svg',
};

const sales = {
	heading: 'SALES',
	text: ['Create Homepage', 'Youtube & Instagram'],
	buttonText: 'Fieldmake',
	background: '#F4F4F4',
	icon: 'sales-icon.svg',
};

const customer = {
	heading: 'CUSTOMER',
	text: 'Customer Request Management',
	buttonText: 'OQUFIE',
	background: '#FFFFFF',
	icon: 'customer-icon.svg',
};

const security = {
	heading: 'SECURITY',
	text: 'SSL server',
	buttonText: 'SECTIGO',
	background: '#F4F4F4',
	icon: 'security-icon.svg',
};

/* ======================================= Setup / teardown ================================= */
beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container)
	act(() => { render(<ServicesView/>, container)}) 
})

afterEach(() => {
	unmountComponentAtNode(container)
	container = null;
})

/* ======================================= Services view Header ============================ */
describe('.services-view-heading-container', () => {
		describe('background', () => {
			it('should have "background: #FFFFFF"', () => {
				const servicesViewHeadingContainer = document.querySelector('.services-view-heading-container');
				const res = hexToRGB('#FFFFFF');

				expect(servicesViewHeadingContainer.style.background).toEqual(res)
			})
		})

		describe('heading text', () => {
			it('should have "fontFamily: Noto Sans, sans-serif"', () => {
				const servicesViewHeadingContainer = document.querySelector('.services-view-heading-container');

				expect(servicesViewHeadingContainer.style.fontFamily).toEqual('Noto Sans, sans-serif')
			})

			it('should have "fontSize: 48px"', () => {
				const servicesViewHeadingContainer = document.querySelector('.services-view-heading-container');

				expect(servicesViewHeadingContainer.style.fontSize).toEqual('48px')
			}) 

			it('should have "fontStyle: normal"', () => {
				const servicesViewHeadingContainer = document.querySelector('.services-view-heading-container');

				expect(servicesViewHeadingContainer.style.fontStyle).toEqual('normal')
			}) 

			it('should have "fontWeight: 700"', () => {
				const servicesViewHeadingContainer = document.querySelector('.services-view-heading-container');

				expect(servicesViewHeadingContainer.style.fontWeight).toEqual('700')
			}) 

			it('should have "lineHeight: 65px"', () => {
				const servicesViewHeadingContainer = document.querySelector('.services-view-heading-container');

				expect(servicesViewHeadingContainer.style.lineHeight).toEqual('65px')
			}) 

			it('should have "letterSpacing: 0.01em"', () => {
				const servicesViewHeadingContainer = document.querySelector('.services-view-heading-container');

				expect(servicesViewHeadingContainer.style.letterSpacing).toEqual('0.01em')
			}) 

			it('should have "textAlign: center"', () => {
				const servicesViewHeadingContainer = document.querySelector('.services-view-heading-container');

				expect(servicesViewHeadingContainer.style.textAlign).toEqual('center')
			}) 

			it('should have "color: #181949"', () => {
				const servicesViewHeadingContainer = document.querySelector('.services-view-heading-container');
				const res = hexToRGB('#181949');

				expect(servicesViewHeadingContainer.style.color).toEqual(res)
			}) 
		})
})

/* ======================================= Services view ================================ */
describe('.service-view', () => {
	describe('.service-info-box-heading', () => {
		it('should have "fontFamily": "Manrope, sans-serif"', () => {
			const serviceInfoBoxHeadings = document.querySelectorAll('.service-info-box-heading');

			serviceInfoBoxHeadings.forEach(serviceInfoBoxHeading => {
				expect(serviceInfoBoxHeading.style.fontFamily).toEqual('Manrope, sans-serif')
			})
		})

		it('should have "fontSize": "32px"', () => {
			const serviceInfoBoxHeadings = document.querySelectorAll('.service-info-box-heading');

			serviceInfoBoxHeadings.forEach(serviceInfoBoxHeading => {
				expect(serviceInfoBoxHeading.style.fontSize).toEqual('32px')
			})
		})

		it('should have "fontStyle": "normal"', () => {
			const serviceInfoBoxHeadings = document.querySelectorAll('.service-info-box-heading');

			serviceInfoBoxHeadings.forEach(serviceInfoBoxHeading => {
				expect(serviceInfoBoxHeading.style.fontStyle).toEqual('normal')
			})
		})

		it('should have "fontWeight": "700"', () => {
			const serviceInfoBoxHeadings = document.querySelectorAll('.service-info-box-heading');

			serviceInfoBoxHeadings.forEach(serviceInfoBoxHeading => {
				expect(serviceInfoBoxHeading.style.fontWeight).toEqual('700')
			})
		})

		it('should have "lineHeight": "44px"', () => {
			const serviceInfoBoxHeadings = document.querySelectorAll('.service-info-box-heading');

			serviceInfoBoxHeadings.forEach(serviceInfoBoxHeading => {
				expect(serviceInfoBoxHeading.style.lineHeight).toEqual('44px')
			})
		})

		it('should have "textAlign": "center"', () => {
			const serviceInfoBoxHeadings = document.querySelectorAll('.service-info-box-heading');

			serviceInfoBoxHeadings.forEach(serviceInfoBoxHeading => {
				expect(serviceInfoBoxHeading.style.textAlign).toEqual('center')
			})
		})

		it('should have "color": "#181949"', () => {
			const serviceInfoBoxHeadings = document.querySelectorAll('.service-info-box-heading');
			const res = hexToRGB('#181949');

			serviceInfoBoxHeadings.forEach(serviceInfoBoxHeading => {
				expect(serviceInfoBoxHeading.style.color).toEqual(res)
			})
		})
	})      
 
	describe('.service-info-box-text', () => {
		it('should have "fontFamily : Noto Sans, sans-serif"', () => {
			const serviceInfoBoxTextElements = document.querySelectorAll('.service-info-box-text');

			serviceInfoBoxTextElements.forEach(serviceInfoBoxTextElement => {
				expect(serviceInfoBoxTextElement.style.fontFamily).toEqual('Noto Sans, sans-serif')
			})
		})

		it('should have "fontSize: 16px"', () => {
			const serviceInfoBoxTextElements = document.querySelectorAll('.service-info-box-text');

			serviceInfoBoxTextElements.forEach(serviceInfoBoxTextElement => {
				expect(serviceInfoBoxTextElement.style.fontSize).toEqual('16px')
			})
		})

		it('should have "fontStyle: normal"', () => {
			const serviceInfoBoxTextElements = document.querySelectorAll('.service-info-box-text');

			serviceInfoBoxTextElements.forEach(serviceInfoBoxTextElement => {
				expect(serviceInfoBoxTextElement.style.fontStyle).toEqual('normal')
			})
		})    

		it('should have "fontWeight : 400"', () => {
			const serviceInfoBoxTextElements = document.querySelectorAll('.service-info-box-text');

			serviceInfoBoxTextElements.forEach(serviceInfoBoxTextElement => {
				expect(serviceInfoBoxTextElement.style.fontWeight).toEqual('400')
			})
		})

		it('should have "lineHeight : 22px"', () => {
			const serviceInfoBoxTextElements = document.querySelectorAll('.service-info-box-text');

			serviceInfoBoxTextElements.forEach(serviceInfoBoxTextElement => {
				expect(serviceInfoBoxTextElement.style.lineHeight).toEqual('22px')
			})
		}) 

		it('should have "textAlign : center"', () => {
			const serviceInfoBoxTextElements = document.querySelectorAll('.service-info-box-text');

			serviceInfoBoxTextElements.forEach(serviceInfoBoxTextElement => {
				expect(serviceInfoBoxTextElement.style.textAlign).toEqual('center')
			})
		})

		it('should have "color : #666666"', () => {
			const serviceInfoBoxTextElements = document.querySelectorAll('.service-info-box-text');
			const res = hexToRGB('#666666');

			serviceInfoBoxTextElements.forEach(serviceInfoBoxTextElement => {
				expect(serviceInfoBoxTextElement.style.color).toEqual(res)
			})
		})
	})

	describe('.service-info-button', () => {
		describe('button', () => {  
			it('should have "borderRadius: 8px"', () => {
				const serviceInfoButtons = document.querySelectorAll('.service-info-button');

				serviceInfoButtons.forEach(serviceInfoButton => {
					expect(serviceInfoButton.style.borderRadius).toEqual('8px')
				})
			})  

			it('should have "padding: 8px"', () => {
				const serviceInfoButtons = document.querySelectorAll('.service-info-button');

				serviceInfoButtons.forEach(serviceInfoButton => {
					expect(serviceInfoButton.style.padding).toEqual('8px')
				})
			}) 

			it('should have "background: #181949"', () => {
				const serviceInfoButtons = document.querySelectorAll('.service-info-button');
				const res = hexToRGB('#181949')

				serviceInfoButtons.forEach(serviceInfoButton => {
					expect(serviceInfoButton.style.background).toEqual(res)
				})
			}) 
		})

		describe('text', () => {
			it('should have "fontFamily: Noto Sans, sans-serif"', () => {
				const serviceInfoButtons = document.querySelectorAll('.service-info-button');

				serviceInfoButtons.forEach(serviceInfoButton => {
					expect(serviceInfoButton.style.fontFamily).toEqual('Noto Sans, sans-serif')
				})
			})

			it('should have "fontSize: 16px"', () => {
				const serviceInfoButtons = document.querySelectorAll('.service-info-button');

				serviceInfoButtons.forEach(serviceInfoButton => {
					expect(serviceInfoButton.style.fontSize).toEqual('16px')
				})
			})
			 
			it('should have "fontStyle: normal"', () => {
				const serviceInfoButtons = document.querySelectorAll('.service-info-button');

				serviceInfoButtons.forEach(serviceInfoButton => {
					expect(serviceInfoButton.style.fontStyle).toEqual('normal')
				})
			})
			 
			it('should have "fontWeight: 600"', () => {
				const serviceInfoButtons = document.querySelectorAll('.service-info-button');

				serviceInfoButtons.forEach(serviceInfoButton => {
					expect(serviceInfoButton.style.fontWeight).toEqual('600')
				})
			})
			 
			it('should have "lineHeight: 16px"', () => {
				const serviceInfoButtons = document.querySelectorAll('.service-info-button');

				serviceInfoButtons.forEach(serviceInfoButton => {
					expect(serviceInfoButton.style.lineHeight).toEqual('16px')
				})
			})

			it('should have "letterSpacing: 0px"', () => {
				const serviceInfoButtons = document.querySelectorAll('.service-info-button');

				serviceInfoButtons.forEach(serviceInfoButton => {
					expect(serviceInfoButton.style.letterSpacing).toEqual('0px')
				})
			})
			
			it('should have "textAlign: center"', () => {
				const serviceInfoButtons = document.querySelectorAll('.service-info-button');

				serviceInfoButtons.forEach(serviceInfoButton => {
					expect(serviceInfoButton.style.textAlign).toEqual('center')
				})
			})

			it('should have "color: #FFFFFF"', () => {
				const serviceInfoButtons = document.querySelectorAll('.service-info-button');
				const res = hexToRGB('#FFFFFF')

				serviceInfoButtons.forEach(serviceInfoButton => {
					expect(serviceInfoButton.style.color).toEqual(res)
				})
			}) 
		})  
	})
	
	describe('.screen-icon', () => {
		it('.screen-icon should have "width: 280px"', () => {
			const screenIcons = document.querySelectorAll('.screen-icon');

			screenIcons.forEach(screenIcon => {
				expect(screenIcon.style.width).toEqual('280px')
			})
		})

		it('.screen-icon should have "height: 235px"', () => {
			const screenIcons = document.querySelectorAll('.screen-icon');

			screenIcons.forEach(screenIcon => {
				expect(screenIcon.style.height).toEqual('235px')
			})
		})
	})

	describe('order', () => {
		it(`service views should appear in order: ${serviceViewOrder}`, () => {
			const servicesView = document.querySelector('.services-view');
			const children = Array.from(servicesView.children);
			expect(children.length).toEqual(serviceViewOrder.length)

			children.forEach((child, i) => {
				expect(child.className).toContain(serviceViewOrder[i])
			})
		})
	}) 
})

/* ======================================= IT cloud view ================================ */
describe('.it-cloud-view', () => {
	describe('background', () => {
		it(`should have "background : ${itCloud.background}`, () => {
			const itCloudView = document.querySelector('.it-cloud-view');
			const res = hexToRGB(itCloud.background);

			expect(itCloudView.style.background).toEqual(res)
		})
	})

	describe('icon', () => {
		it(`should have ${itCloud.icon}`, () => {
			const itCloudView = document.querySelector('.it-cloud-view');
			const icon = itCloudView.querySelector('.service-icon');
			const src = icon.src.split('/');

			expect(src[src.length-1]).toEqual(itCloud.icon)
		})
	})

	describe('heading', () => {
		it(`should have heading text "${itCloud.heading}"`, () => {
			const itCloudView = document.querySelector('.it-cloud-view');
			const heading = itCloudView.querySelector('.service-info-box-heading');

			expect(heading.textContent).toEqual(itCloud.heading)
		})
	})

	describe('text', () => {
		it(`should have text "${itCloud.text}"`, () => {
			const itCloudView = document.querySelector('.it-cloud-view');
			const text = itCloudView.querySelector('.service-info-box-text');

			expect(text.textContent).toEqual(itCloud.text)
		})
	})

	describe('button', () => {
		it(`should have button text "${itCloud.buttonText}"`, () => {
			const itCloudView = document.querySelector('.it-cloud-view');
			const button = itCloudView.querySelector('.service-info-button');

			expect(button.textContent).toEqual(itCloud.buttonText)
		})
	})
}) 

/* ======================================= Accounting view =============================== */
describe('.accounting-view', () => {
	describe('background', () => {
		it(`should have "background : ${accounting.background}`, () => {
			const accountingView = document.querySelector('.accounting-view');
			const res = hexToRGB(accounting.background);

			expect(accountingView.style.background).toEqual(res)
		})
	})

	describe('icon', () => {
		it(`should have ${accounting.icon}`, () => {
			const accountingView = document.querySelector('.accounting-view');
			const icon = accountingView.querySelector('.service-icon');
			const src = icon.src.split('/');

			expect(src[src.length-1]).toEqual(accounting.icon)
		})
	})

	describe('heading', () => {
		it(`should have heading text "${accounting.heading}"`, () => {
			const accountingView = document.querySelector('.accounting-view');
			const heading = accountingView.querySelector('.service-info-box-heading');

			expect(heading.textContent).toEqual(accounting.heading)
		})
	})

	describe('text', () => {
		it(`should have text "${accounting.text}"`, () => {
			const accountingView = document.querySelector('.accounting-view');
			const text = accountingView.querySelector('.service-info-box-text');

			expect(text.textContent).toEqual(accounting.text)
		})
	})

	describe('button', () => {
		it(`should have button text "${accounting.buttonText}"`, () => {
			const accountingView = document.querySelector('.accounting-view');
			const button = accountingView.querySelector('.service-info-button');

			expect(button.textContent).toEqual(accounting.buttonText)
		})
	})
}) 

/* ======================================= HR Admin View ================================= */
describe('.hr-admin-view', () => {
	describe('background', () => {
		it(`should have "background : ${hrAdmin.background}`, () => {
			const hrAdminView = document.querySelector('.hr-admin-view');
			const res = hexToRGB(hrAdmin.background);

			expect(hrAdminView.style.background).toEqual(res)
		})
	})

	describe('icon', () => {
		it(`should have ${hrAdmin.icon}`, () => {
			const hrAdminView = document.querySelector('.hr-admin-view');
			const icon = hrAdminView.querySelector('.service-icon');
			const src = icon.src.split('/');

			expect(src[src.length-1]).toEqual(hrAdmin.icon)
		})
	})

	describe('heading', () => {
		it(`should have heading text "${hrAdmin.heading}"`, () => {
			const hrAdminView = document.querySelector('.hr-admin-view');
			const heading = hrAdminView.querySelector('.service-info-box-heading');

			expect(heading.textContent).toEqual(hrAdmin.heading)
		})
	})

	describe('text', () => {
		it(`should have text "${hrAdmin.text}"`, () => {
			const hrAdminView = document.querySelector('.hr-admin-view');
			const textElements = hrAdminView.querySelectorAll('.service-info-box-text');
			expect(textElements.length).toEqual(hrAdmin.text.length)

			textElements.forEach((text, i) => {
				expect(text.textContent).toEqual(hrAdmin.text[i])
			})
		})
	})

	describe('button', () => {
		it(`should have button text "${hrAdmin.buttonText}"`, () => {
			const hrAdminView = document.querySelector('.hr-admin-view');
			const buttons = hrAdminView.querySelectorAll('.service-info-button');
			expect(buttons.length).toEqual(hrAdmin.buttonText.length)

			buttons.forEach((button, i) => {
				expect(button.textContent).toEqual(hrAdmin.buttonText[i])
			}) 
		})
	})
}) 

/* ======================================= Sales View ==================================== */
describe('.hr-admin-view', () => {
	describe('background', () => {
		it(`should have "background : ${sales.background}`, () => {
			const salesView = document.querySelector('.sales-view');
			const res = hexToRGB(sales.background);

			expect(salesView.style.background).toEqual(res)
		})
	})

	describe('icon', () => {
		it(`should have ${sales.icon}`, () => {
			const salesView = document.querySelector('.sales-view'); 
			const icon = salesView.querySelector('.service-icon');
			const src = icon.src.split('/');

			expect(src[src.length-1]).toEqual(sales.icon)
		})
	})

	describe('heading', () => {
		it(`should have heading text "${sales.heading}"`, () => {
			const salesView = document.querySelector('.sales-view');
			const heading = salesView.querySelector('.service-info-box-heading');

			expect(heading.textContent).toEqual(sales.heading)
		})
	})

	describe('text', () => {
		it(`should have text "${sales.text}"`, () => {
			const salesView = document.querySelector('.sales-view');
			const textElements = salesView.querySelectorAll('.service-info-box-text');
			expect(textElements.length).toEqual(sales.text.length)

			textElements.forEach((text, i) => {
				expect(text.textContent).toEqual(sales.text[i])
			})
		})
	})

	describe('button', () => {
		it(`should have button text "${sales.buttonText}"`, () => {
			const salesView = document.querySelector('.sales-view');
			const button = salesView.querySelector('.service-info-button');
			
			expect(button.textContent).toEqual(sales.buttonText)
		})
	})
}) 

/* ======================================= Customer View ================================= */
describe('.customer-view', () => {
	describe('background', () => {
		it(`should have "background : ${customer.background}`, () => {
			const customerView = document.querySelector('.customer-view');
			const res = hexToRGB(customer.background);

			expect(customerView.style.background).toEqual(res)
		})
	})

	describe('icon', () => {
		it(`should have ${customer.icon}`, () => {
			const customerView = document.querySelector('.customer-view');
			const icon = customerView.querySelector('.service-icon');
			const src = icon.src.split('/');

			expect(src[src.length-1]).toEqual(customer.icon)
		})
	})

	describe('heading', () => {
		it(`should have heading text "${customer.heading}"`, () => {
			const customerView = document.querySelector('.customer-view');
			const heading = customerView.querySelector('.service-info-box-heading');

			expect(heading.textContent).toEqual(customer.heading)
		})
	})

	describe('text', () => {
		it(`should have text "${customer.text}"`, () => {
			const customerView = document.querySelector('.customer-view');
			const text = customerView.querySelector('.service-info-box-text'); 

			expect(text.textContent).toEqual(customer.text)
		})
	})

	describe('button', () => {
		it(`should have button text "${customer.buttonText}"`, () => {
			const customerView = document.querySelector('.customer-view');
			const button = customerView.querySelector('.service-info-button');
			
			expect(button.textContent).toEqual(customer.buttonText)
		})
	})
}) 

/* ======================================= Security View ================================= */
describe('.security-view', () => {
	describe('background', () => {
		it(`should have "background : ${security.background}`, () => {
			const securityView = document.querySelector('.security-view');
			const res = hexToRGB(security.background);

			expect(securityView.style.background).toEqual(res)
		})
	})

	describe('icon', () => {
		it(`should have ${security.icon}`, () => {
			const securityView = document.querySelector('.security-view');
			const icon = securityView.querySelector('.service-icon');
			const src = icon.src.split('/');

			expect(src[src.length-1]).toEqual(security.icon)
		})
	})

	describe('heading', () => {
		it(`should have heading text "${security.heading}"`, () => {
			const securityView = document.querySelector('.security-view');
			const heading = securityView.querySelector('.service-info-box-heading');

			expect(heading.textContent).toEqual(security.heading)
		})
	})

	describe('text', () => {
		it(`should have text "${security.text}"`, () => {
			const securityView = document.querySelector('.security-view');
			const text = securityView.querySelector('.service-info-box-text'); 

			expect(text.textContent).toEqual(security.text)
		})
	})

	describe('button', () => {
		it(`should have button text "${security.buttonText}"`, () => {
			const securityView = document.querySelector('.security-view');
			const button = securityView.querySelector('.service-info-button');
			
			expect(button.textContent).toEqual(security.buttonText)
		})
	})
}) 