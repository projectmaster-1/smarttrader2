import { observer } from 'mobx-react-lite';
import { useStore } from '@/hooks/useStore';
import { useTranslations } from '@deriv-com/translations';
import { MenuItem, Text } from '@deriv-com/ui';

export const MenuItems = observer(() => {
    const { localize } = useTranslations();
    const store = useStore();
    
    // Optional: Remove these two lines if you want the link to show up EVEN WHEN users are logged out
    const is_logged_in = store?.client?.is_logged_in ?? false;
    if (!is_logged_in) return null;

    return (
        <>
            {/* Custom Free Bots Tab Link */}
            <MenuItem
                as='a'
                className='app-header__menu'
                href='/bots/over-and-under.xml'
                download='Over_and_Under_Strategy.xml'
            >
                <Text style={{ color: '#00ff88', fontWeight: 'bold' }}>
                    {localize('🎲 Free Bots')}
                </Text>
            </MenuItem>
        </>
    );
});

export const TradershubLink = observer(() => {
    return null;
});

// Namespace wiring
type MenuItemsType = typeof MenuItems & {
    TradershubLink: typeof TradershubLink;
};

(MenuItems as MenuItemsType).TradershubLink = TradershubLink;

export default MenuItems as MenuItemsType;
