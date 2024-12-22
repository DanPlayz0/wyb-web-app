import Button from '@/components/Button'

export const mdxComponents = {
	Button: Button,
	a: CustomLink
}

function CustomLink(props: any) {
	return (
		<a
			{...props}
			target="_blank"
		/>
	)
}
