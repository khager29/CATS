import { ReactNode } from 'react';
import { GlobalHeader } from '@greatminds/dp-atomic-ui-lib/dist/components/organisms/GlobalHeader/GlobalHeader.component';
import { GlobalFooter } from '@greatminds/dp-atomic-ui-lib/dist/components/organisms/GlobalFooter/GlobalFooter.component';
import { StyledContainer } from './MainLayout.styled';

interface IMainProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: IMainProps) => {
  const user = {
    firstName: 'Carlos',
    lastName: 'Sanchez',
  };
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const logout = () => {};
  const activeRole = 'teacher';
  const availableRoles = ['teacher'];
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const changeRole = () => {};

  return (
    <div>
      <GlobalHeader
        currentApp="planning"
        hideAppSelector={false}
        hideNotificationBell
        skipContentHref="#content"
        logoSrc="/static/GreatMinds_Bar_Black.svg"
        onLogout={logout}
        titleCenter="Generic"
        user={user}
        availableRoles={availableRoles}
        currentRole={activeRole}
        onChangeRole={changeRole}
        currentPlatform="digital"
        productsList={['in-sync', 'affirm', 'em-nav', 'digital', 'inkling', 'geodesdig']}
      />
      <StyledContainer>
        {children}
      </StyledContainer>
      <GlobalFooter />
    </div>
  );
};

export default MainLayout;
