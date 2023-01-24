import { useContext } from 'react';

import { PageContext } from '~/contexts';
import { type IPageContext } from '~/types';

const usePage = (): IPageContext => useContext(PageContext);

export default usePage;
