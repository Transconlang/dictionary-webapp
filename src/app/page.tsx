import Link from '@/components/misc/link';

export default function Home() {
	return (
		<main className='min-h-screen grid place-content-center text-center bg-blue gap-8'>
			<h1 className='text-2xl font-bold font-serif'>
				Te Tobacun Kumilinwa ✨"Official"✨
			</h1>
			<Link href='/search/' className='text-xl font-bold text-purple'>
				Search
			</Link>
			<Link href='/browse/' className='text-xl font-bold text-purple'>
				Browse
			</Link>
		</main>
	);
}
