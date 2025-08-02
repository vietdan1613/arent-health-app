import { Link } from 'react-router-dom';
import NaviMemo from './NaviMemo';
import DropdownMenu from './DropdownMenu';

export default function Header() {
    const menuItems = [
        { label: '自分の記録', onClick: () => alert('Go to Profile') },
        { label: '体重グラフ', onClick: () => alert('Go to Settings') },
        { label: '目標', onClick: () => alert('Logging out...') },
        { label: '選択中のコース', onClick: () => alert('Logging out...') },
        { label: 'コラム一覧', onClick: () => alert('Logging out...') },
        { label: '設定', onClick: () => alert('Logging out...') },
    ];
    return (
        <nav className='bg-dark-500'>
            <div className='max-w-[1280px] mx-auto'>
                <div className='flex justify-between items-center h-[64px] px-[160px]'>
                    <Link to="/">
                        <img src="/icons/logo.svg" alt="Logo" className="w-[114px] h-[64px]" />
                    </Link>
                    <div className="text-white flex items-center">
                        <NaviMemo
                            iconSrc="/icons/icon_memo.svg"
                            text="自分の記録"
                            linkTo="/record"
                            selected
                        />
                        <NaviMemo
                            iconSrc="/icons/icon_challenge.svg"
                            text="チャレンジ"
                        />
                        <NaviMemo
                            iconSrc="/icons/icon_info.svg"
                            text="お知らせ"
                            notification={1}
                        />
                        <DropdownMenu label="My Account" items={menuItems} />
                    </div>
                </div>
            </div>
        </nav>
    );
}