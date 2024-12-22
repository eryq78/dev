{{-- This file is used for menu items by any Backpack v6 theme --}}
<li class="nav-item"><a class="nav-link" href="{{ backpack_url('dashboard') }}"><i class="la la-home nav-icon"></i> {{ trans('backpack::base.dashboard') }}</a></li>

<x-backpack::menu-dropdown title="Gebruikers" icon="la la-group">
    <x-backpack::menu-dropdown-item title="Gebruikers" icon="la la-question" :link="backpack_url('user')" />
    <x-backpack::menu-dropdown-item title="Rollen" icon="la la-group" :link="backpack_url('role')" />
    <x-backpack::menu-dropdown-item title="Rechten" icon="la la-key" :link="backpack_url('permission')" />
</x-backpack::menu-dropdown>
<x-backpack::menu-dropdown title="Instellingen" icon="la la-group">
    <x-backpack::menu-dropdown-item title="Backup" icon="la la-hdd-o" :link="backpack_url('backup')" />
    <x-backpack::menu-dropdown-item title="Activiteiten" icon="la la-hdd-o" :link="backpack_url('activity-log')" />
    <x-backpack::menu-dropdown-item title="Laravel log" icon="la la-hdd-o" :link="backpack_url('log')" />
</x-backpack::menu-dropdown>
